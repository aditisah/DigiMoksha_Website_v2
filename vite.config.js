import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configuration options...
  build: {
    // Specify the entry file here
    rollupOptions: {
      input: 'public/index.html', // Replace with your actual entry file path
    },
  },
});
