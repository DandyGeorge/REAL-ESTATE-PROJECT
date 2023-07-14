import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { checkTargetForNewValues } from 'framer-motion'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
