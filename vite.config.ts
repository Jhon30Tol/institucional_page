import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    // Removido 'define' para evitar exposição de chaves sensíveis no código-fonte do navegador
    // Se precisar usar chaves no frontend, use import.meta.env (com prefixo VITE_) ou, preferencialmente, um proxy backend.

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
