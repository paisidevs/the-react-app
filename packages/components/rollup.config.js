import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [
    external(),
    resolve({
      preferBuiltins: true,
    }),
    typescript({
      typescript: require('typescript'),
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs(),
    terser(),
  ],
};
