import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const banner = `// fancyLog v${ pkg.version } - ${pkg.author}\n// ${pkg.homepage}\n`

export default {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: 'dist/fancylog.esm.js',
      format: 'esm',
    },
    {
      banner,
      file: 'dist/fancylog.js',
      format: 'umd',
      name: 'FancyLog',
    },
    {
      banner,
      file: 'dist/fancylog.min.js',
      format: 'umd',
      name: 'FancyLog',
    },
  ],
  plugins: [
    resolve(),
    cjs(),
    terser({
      include: /^.+\.min\.js$/,
    }),
  ],
}
