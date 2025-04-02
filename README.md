# AndyChatbot - AI Assistant

A modern AI chatbot powered by Gemini.

## Deployment Instructions for Netlify

This project is configured to be deployed on Netlify. Follow these steps to deploy your application:

### 1. Push your code to a Git repository

Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

### 2. Sign up or log in to Netlify

Go to [Netlify](https://www.netlify.com/) and sign up or log in to your account.

### 3. Create a new site from Git

- Click on the "New site from Git" button
- Select your Git provider (GitHub, GitLab, or Bitbucket)
- Authorize Netlify to access your repositories
- Select the repository containing this project

### 4. Configure build settings

Netlify should automatically detect that this is a Next.js project and use the settings from the `netlify.toml` file. However, verify these settings:

- Build command: `npm run build`
- Publish directory: `.next`

### 5. Configure environment variables

If your application requires any environment variables (API keys, etc.), add them in the Netlify dashboard:

- Go to Site settings > Build & deploy > Environment
- Add the variables listed in the `.env.example` file

### 6. Deploy

- Click on the "Deploy site" button
- Wait for the build and deployment to complete

### 7. Custom domain (optional)

- Go to Site settings > Domain management
- Add your custom domain or use the free Netlify subdomain

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start
```

## Project Structure

This is a Next.js application using the App Router. The main components are:

- `app/` - Contains all the routes and components for the application
- `components/` - Reusable UI components
- `public/` - Static assets
- `styles/` - Global styles

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS
- Radix UI components