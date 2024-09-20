import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import eslint from 'vite-plugin-eslint';
import Checker from 'vite-plugin-checker'; // Import vite-plugin-checker

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint({ emitWarning: true, emitError: true, failOnError: false }),
    Checker({ typescript: true }), // Add Checker plugin for TypeScript
  ],
  resolve: {
    alias: {
      '@': '/src', // Example alias configuration
    },
  },
  server: {
    open: true, // Automatically open the browser on server start
  },
});
