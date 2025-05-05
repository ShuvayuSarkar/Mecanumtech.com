# Mecanumtech Website - Deployment Guide

This repository contains the source code for the Mecanumtech website, a Next.js application for showcasing our advanced energy storage solutions and products.

## Getting Started

Follow these steps to clone, set up, and deploy the Mecanumtech website.

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher
- Git
- Cloudflare account

## Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/mecanumtech.com.git

# Navigate to the project directory
cd mecanumtech.com
```

## Step 2: Install Dependencies

```bash
# Install project dependencies
npm install
```

## Step 3: Environment Setup

Create a `.env.local` file in the root directory with any environment variables:

```bash
# Example .env.local
NEXT_PUBLIC_CONTACT_EMAIL=info@mecanumtech.com
```

## Step 4: Local Development

```bash
# Run the development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## Step 5: Build the Website

```bash
# Create a production build
npm run build
```

This will generate static files in the out directory.

## Step 6: Deploy to Cloudflare Pages

### Install Wrangler

```bash
# Install Wrangler CLI globally
npm install -g wrangler
```

### Login to Cloudflare

```bash
# Authenticate with your Cloudflare account
wrangler login
```

### Create Wrangler Configuration

Create a wrangler.toml file in the root directory:

```toml
name = "mecanumtech"
compatibility_date = "2023-05-05"
pages_build_output_dir = "out"
```

### Deploy the Website

```bash
# Deploy to Cloudflare Pages
wrangler pages deploy out
```

During the first deployment, you'll be prompted to:

1. Create a new project or select an existing one
2. Set a project name (e.g., "mecanumtech")
3. Choose a production branch (usually "main")

## Step 7: Set Up Custom Domain (Optional)

1. Go to the Cloudflare Dashboard
2. Navigate to Pages > Your Project
3. Click on "Custom domains"
4. Add your domain (e.g., mecanumtech.com)
5. Follow the DNS setup instructions

## Step 8: Update the Website

When you make changes to the website:

```bash
# Pull the latest changes
git pull

# Install any new dependencies
npm install

# Build the website
npm run build

# Deploy the updated version
wrangler pages deploy out
```

## Project Structure

```
mecanumtech.com/
├── components/        # React components
│   ├── home/          # Home page components
│   └── ui/            # UI components (header, footer, etc.)
├── pages/             # Next.js pages
├── public/            # Static files
│   ├── images/        # Image assets
│   └── brochure.pdf   # Downloadable brochure
├── styles/            # CSS files
├── next.config.js     # Next.js configuration
└── wrangler.toml      # Cloudflare Wrangler configuration
```

## Troubleshooting

### Images Not Loading

- Ensure all image paths are correct
- Check that images are in the public directory

### 404 Errors on Navigation

Create a `_routes.json` file in the out directory:

```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/build/*", "/images/*", "/*.ico", "/*.png", "/*.svg"],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Rollback to Previous Version

```bash
# List deployments
wrangler pages deployment list

# Activate a specific deployment
wrangler pages deployment activate <DEPLOYMENT_ID>
```

## Contributing

1. Create a feature branch: `git checkout -b feature-name`
2. Make your changes
3. Commit your changes: `git commit -m "Description of changes"`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, contact us at info@mecanumtech.com
