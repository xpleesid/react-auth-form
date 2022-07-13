/* eslint-disable import/no-extraneous-dependencies */
const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');

const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');
const devServer = require('esbuild-plugin-dev-server');
const postCssPlugin = require('@deanc/esbuild-plugin-postcss');
const { clean: cleanPlugin } = require('esbuild-plugin-clean');
const svgrPlugin = require('esbuild-plugin-svgr');

const cssNextPlugin = require('postcss-cssnext');
const cssNanoPlugin = require('cssnano');

const plugins = [
  cssModulesPlugin({
    inject: false,

    localsConvention: 'camelCaseOnly',
    cssModulesOption: {},

    v2: true,
    v2CssModulesOption: {
      dashedIndents: false,
      pattern: `[local]_[hash]`,
    },
  }),
  postCssPlugin({
    plugins: [cssNextPlugin, cssNanoPlugin],
  }),
  htmlPlugin({
    files: [
      {
        entryPoints: ['src/App.tsx'],
        filename: 'index.html',
        htmlTemplate: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React + Typescript test app</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
</body>
</html>
`,
      },
    ],
  }),
  cleanPlugin({
    patterns: ['./public/assets/*'],
  }),
  svgrPlugin(),
];

if (process.env.NODE_ENV === 'dev') {
  plugins.push(devServer({ public: './public', port: 3000 }));
}

esbuild.build({
  entryPoints: ['./src/App.tsx'],
  entryNames: '/assets/[name]-[hash]',
  bundle: true,
  minify: true,
  metafile: true,
  format: 'esm',
  sourcemap: process.env.NODE_ENV === 'dev' ? 'inline' : false,
  outdir: 'public',
  plugins,
});
