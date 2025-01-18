import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// Vite: A modern build tool that provides fast development servers and builds.
// React Plugin: Integrates React features like JSX transformation with Vite.

// defineConfig: Defines the configuration for the Vite project.
// Plugins:
// The react() plugin adds React-specific functionalities, like support for JSX, HMR (Hot Module Replacement), and other optimizations.