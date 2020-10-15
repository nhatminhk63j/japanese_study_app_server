import * as path from 'path';

const env = process.env.NODE_ENV || 'development';

const p = path.join(process.cwd(), `env/${env}.env`);

console.log(`Load environment from ${p}`);

const dotenvOptions = {
  path: p,
};

export { dotenvOptions };
