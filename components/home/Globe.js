'use client';
import React, { useRef, useEffect } from 'react';

export default function Globe() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamically import Three.js on the client side
    const initThree = async () => {
      const THREE = await import('three');
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls');

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Add controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.rotateSpeed = 0.5;

      // Load Earth textures
      const textureLoader = new THREE.TextureLoader();
      
      // Create a loading manager to track when all textures are loaded
      const loadingManager = new THREE.LoadingManager();
      
      // Earth textures - using NASA Blue Marble textures
      const earthTexture = textureLoader.load('/images/projects/earth_daymap.jpg');
      const bumpMap = textureLoader.load('/images/projects/earth_bumpmap.jpg');
      const specularMap = textureLoader.load('/images/projects/earth_specularmap.png');
      const cloudsTexture = textureLoader.load('/images/projects/earth_clouds.jpg');
      const nightTexture = textureLoader.load('/earth_nightmap.jpg');
      
      // Earth with texture
      const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture,
        bumpMap: bumpMap,
        bumpScale: 0.05,
        specularMap: specularMap,
        specular: new THREE.Color(0x333333),
        shininess: 25,
      });
      
      const earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);
      
      // Add cloud layer
      const cloudGeometry = new THREE.SphereGeometry(2.01, 64, 64);
      const cloudMaterial = new THREE.MeshPhongMaterial({
        map: cloudsTexture,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
      });
      
      const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
      scene.add(clouds);
      
      // Add atmosphere glow
      const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64);
      const atmosphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x0077ff,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide,
      });
      
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      scene.add(atmosphere);

      // Improved lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
      scene.add(ambientLight);
      
      // Main directional light (sun)
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(-10, 5, 10);
      scene.add(directionalLight);
      
      // Additional lights for better illumination
      const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
      scene.add(hemisphereLight);

      // Subtle rim light to highlight the edge of the Earth
      const rimLight = new THREE.DirectionalLight(0x99ccff, 0.5);
      rimLight.position.set(10, 0, -10);
      scene.add(rimLight);
      
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        
        // Rotate the earth and clouds at different speeds
        earth.rotation.y += 0.0005;
        clouds.rotation.y += 0.0007;
        
        controls.update();
        renderer.render(scene, camera);
      };
      
      animate();

      // Handle window resize
      const handleResize = () => {
        if (!containerRef.current) return;
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      };
      
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        controls.dispose();
        renderer.dispose();
      };
    };

    initThree();
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}