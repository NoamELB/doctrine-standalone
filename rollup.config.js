'use strict';

const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const builtins = require('rollup-plugin-node-builtins');
const globals = require('rollup-plugin-node-globals');

module.exports = {
  exports: 'named',
  plugins: [
    json(),
    builtins(),
    globals(),
    babel({
      presets: [
        "es2015-rollup"
      ]
    }),
    nodeResolve({
      browser: true,
      jsnext: true,
      main: true,
    }),
    commonjs({
      include: 'node_modules/**' 
    }),
  ]
};