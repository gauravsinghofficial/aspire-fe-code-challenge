// Aspire Card App - Environment configuration
// This file documents environment variables used in the application

/*
  ENVIRONMENT VARIABLES:
  
  Create a .env.local file in the project root for local development.
  These variables are automatically injected into the app via Vite.
  
  Variables prefixed with VITE_ are exposed to the client-side code.
  
  Example .env.local file:
  
  VITE_API_ENDPOINT=http://localhost:3001
  VITE_APP_TITLE=Aspire Card Manager
  
  Available variables:
  - VITE_API_ENDPOINT: API endpoint for backend calls (if needed)
  - VITE_APP_TITLE: Application title
  - VITE_DEBUG: Enable debug logging
*/

export const envConfig = {
  apiEndpoint: import.meta.env.VITE_API_ENDPOINT || "http://localhost:3001",
  appTitle: import.meta.env.VITE_APP_TITLE || "Aspire Card Management",
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  debugEnabled: import.meta.env.VITE_DEBUG === "true",
} as const;
