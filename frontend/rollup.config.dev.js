import terser from "@rollup/plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from "rollup-plugin-postcss";
import typescript from '@rollup/plugin-typescript';

//postcss plugins
import simpleVars from "postcss-simple-vars";
import nested from "postcss-nested";
import cssnext from "postcss-cssnext";
import cssnano from "cssnano";

export default {
    input: "src/index.tsx",
    output: {
        file: 'public/bundle.min.js',
        format: 'iife',
        sourcemap: "inline",
        inlineDynamicImports: true,
        plugins: [terser()]
    },
    external: ["React"],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        nodeResolve({
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            preventAssignment: true,
        }),
        babel({
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"],
            babelHelpers: 'runtime',
        }),
        commonjs(),
        serve({
            open: true,
            verbose: true,
            contentBase: "public",
            historyApiFallback: true,
            host: "localhost",
            port: 3000,
        }),
        livereload({watch: "dist"}),
        postcss({
            extensions: [".css"],
            plugins: [
                simpleVars(),
                nested(),
                cssnext({ warnForDuplicates: false }),
                cssnano(),
            ]
        }),
    ],
    // external: ["react", "react-dom"],
};