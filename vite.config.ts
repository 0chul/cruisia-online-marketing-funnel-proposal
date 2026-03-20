import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [react()],
    define: {
      __APP_ENV_GEMINI_API_KEY__: JSON.stringify(env.VITE_GEMINI_API_KEY ?? ''),
      __APP_ENV_NARA_API_KEY__: JSON.stringify(env.VITE_NARA_API_KEY ?? ''),
      __APP_ENV_NARA_SHOULD_ENCODE_KEY__: JSON.stringify(env.VITE_NARA_SHOULD_ENCODE_KEY ?? '')
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/pdfjs-dist')) return 'pdf-worker';
            if (id.includes('node_modules/recharts')) return 'charts';
            if (id.includes('node_modules')) return 'vendor';
          }
        }
      }
    },
    server: {
      proxy: {
        '/api/hwpx': {
          target: 'http://127.0.0.1:8080',
          changeOrigin: true
        },
        '/api/knowledge': {
          target: 'http://127.0.0.1:8080',
          changeOrigin: true
        },
        '/api/ai': {
          target: 'http://127.0.0.1:8080',
          changeOrigin: true
        },
        '/api/nara': {
          target: 'http://127.0.0.1:8080',
          changeOrigin: true
        }
      }
    },
    base: './'
  };
});
