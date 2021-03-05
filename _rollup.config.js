import {nodeResolve} from "@rollup/plugin-node-resolve"
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import { terser } from "rollup-plugin-terser"
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano';


const production = !process.env.ROLLUP_WATCH;

export default {
  input: "./src/index.js",
  output: {
    file: "./index.js",
    format: "iife",
    sourcemap: false,
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    postcss({
      extract: true,
      plugins: [
        autoprefixer(),
        production && cssnano(),
      ],
    }),
    vue({ css: false }),
    production && terser(),
  ],
}