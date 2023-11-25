import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: false,
    format: ["cjs", "esm"],
    minify: true,
    dts: true,
    clean: true,
})