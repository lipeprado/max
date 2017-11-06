// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file
/* eslint-disable no-console */ 
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production'; // this assures the Babel dev config(for hot reloading) doesn't apply

console.log('====================================');
console.log('Gerando Bundle... Isso pode Demorar');
console.log('====================================');

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: ');
    jsonStats.warnings.map(warning => console.log(warning));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log('App Ready, Lets Go!');

  return 0;
});
