// This file helps Netlify properly recognize the Next.js app directory structure

module.exports = {
  // Tell Netlify this is a Next.js app with app directory
  framework: 'next',
  
  // Configure the build settings
  build: {
    command: 'npm run build',
    publish: '.next',
    environment: {
      NODE_VERSION: '18',
      NEXT_TELEMETRY_DISABLED: '1',
      NETLIFY_NEXT_PLUGIN_SKIP: 'false'
    }
  },
  
  // Ensure Netlify knows about the app directory
  nextjs: {
    // The appDir option is no longer needed in newer Next.js versions
  },
  
  // Configure functions
  functions: {
    directory: 'netlify/functions'
  }
};