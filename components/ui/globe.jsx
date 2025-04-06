"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3, Object3D } from "three";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../../app/data/globe.json";

// Dynamic import to avoid SSR issues
let ThreeGlobe;

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

let numbersOfRings = [0];

// Custom primitive that wraps ThreeGlobe
function ThreeGlobePrimitive({ globeConfig = {}, data }) {
  const primitiveRef = useRef();
  const [globe, setGlobe] = useState(null);
  
  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...(globeConfig || {}), // Ensure we have a fallback
  };

  // Create and initialize the globe
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Import ThreeGlobe dynamically
    async function loadThreeGlobe() {
      if (!ThreeGlobe) {
        ThreeGlobe = (await import('three-globe')).default;
      }
      
      if (!globe && primitiveRef.current) {
        const newGlobe = new ThreeGlobe();
        setGlobe(newGlobe);
        
        // Add the globe to the scene graph
        primitiveRef.current.add(newGlobe);
      }
    }
    
    loadThreeGlobe();
    
    // Cleanup
    return () => {
      if (globe && primitiveRef.current) {
        primitiveRef.current.remove(globe);
      }
    };
  }, [globe]);

  // Configure material when globe is created
  useEffect(() => {
    if (!globe) return;

    const globeMaterial = globe.globeMaterial();
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity || 0.1;
    globeMaterial.shininess = defaultProps.shininess || 0.9;
  }, [
    globe,
    defaultProps.globeColor,
    defaultProps.emissive,
    defaultProps.emissiveIntensity,
    defaultProps.shininess,
  ]);

  // Configure data visualization when globe is created and data changes
  useEffect(() => {
    if (!globe || !data) return;

    const arcs = data;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color);
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter((v, i, a) =>
      a.findIndex((v2) =>
        ["lat", "lng"].every((k) => v2[k] === v[k])) === i);

    globe
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    globe
      .arcsData(data)
      .arcStartLat((d) => (d).startLat * 1)
      .arcStartLng((d) => (d).startLng * 1)
      .arcEndLat((d) => (d).endLat * 1)
      .arcEndLng((d) => (d).endLng * 1)
      .arcColor((e) => (e).color)
      .arcAltitude((e) => (e).arcAlt * 1)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => (e).order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    globe
      .pointsData(filteredPoints)
      .pointColor((e) => (e).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globe
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
  }, [
    globe,
    data,
    defaultProps.pointSize,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ]);

  // Handle rings animation with cleanup
  useEffect(() => {
    if (!globe || !data) return;

    const interval = setInterval(() => {
      if (!globe) return;

      const newNumbersOfRings = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));

      const ringsData = data
        .filter((d, i) => newNumbersOfRings.includes(i))
        .map((d) => ({
          lat: d.startLat,
          lng: d.startLng,
          color: d.color,
        }));

      globe.ringsData(ringsData);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globe, data]);

  // Fix: Use the proper React component name for Object3D
  return <group ref={primitiveRef} />;
}

export function Globe(props) {
  // Skip rendering during SSR
  if (typeof window === 'undefined') {
    return null;
  }
  
  return <ThreeGlobePrimitive {...props} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]);

  return null;
}

export function World(props) {
  const { globeConfig = {} } = props; // Default to empty object
  
  // Default globe config values if not provided
  const defaultGlobeConfig = {
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    ...globeConfig
  };
  
  // Skip rendering if window is not defined (SSR)
  if (typeof window === 'undefined') {
    return null;
  }
  
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={defaultGlobeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={defaultGlobeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)} />
      <directionalLight
        color={defaultGlobeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)} />
      <pointLight
        color={defaultGlobeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8} />
      <Globe {...props} globeConfig={defaultGlobeConfig} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3} />
    </Canvas>
  );
}

// Helper function that was referenced but missing in the original code
function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}