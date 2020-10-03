import { dotenvOptions } from '../configs/dotenv-options';
import * as dotenv from 'dotenv';

dotenv.config(dotenvOptions);

import * as dbConfig from '../configs/database';

export = dbConfig.default;
