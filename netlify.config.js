// This file configures Next.js for Netlify deployment
// It ensures Netlify correctly recognizes the app directory structure

module.exports = {
  // Tell Netlify where to find the app directory
  appDir: true,
  
  // Ensure Netlify knows this is a Next.js app
  framework: 'next',
  
  // Configure the build output
  distDir: '.next',
  
  // Ensure Netlify recognizes the app directory structure
  // This is important for the build process
  trailingSlash: false,
  
  // Additional configuration to help Netlify recognize the app directory
  experimental: {
    appDir: true
  }
};