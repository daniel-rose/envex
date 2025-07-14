import react from '@vitejs/plugin-react-swc'
import { nodeExternals } from 'rollup-plugin-node-externals'
import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: '@daniel-rose/envex',
      entry: {
        index: 'src/index.ts',
        script: 'src/script.ts',
        server: 'src/server.ts',
        'dev-tools': 'src/dev-tools.ts',
      },
    },
    rollupOptions: {
      plugins: [preserveDirectives()],
      output: [
        {
          dir: './dist',
          format: 'cjs',
          entryFileNames: '[name].cjs',
        },
        {
          dir: './dist',
          format: 'es',
          entryFileNames: '[name].js',
        },
      ],
    },
  },
  plugins: [
    react(),
    nodeExternals(),
    dts({ tsconfigPath: './tsconfig.app.json', rollupTypes: true }),
  ],
})
