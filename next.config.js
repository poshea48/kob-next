// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv();

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log('Im in dev mode!');
//   }
//   return defaultConfig;
// };
