import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  deps: { neverBundle: ['webpack'] },
  copy: [{ from: 'src/index.d.ts', to: 'dist' }],
})
