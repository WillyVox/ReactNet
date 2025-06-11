// knip.config.ts
import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/main.tsx'],
  ignore: ['node_modules/**'],
  ignoreDependencies: ['react', 'react-dom'],
  // other configs
};

export default config;
