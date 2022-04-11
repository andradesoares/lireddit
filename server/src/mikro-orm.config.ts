import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';

export default {
  entities: [Post],
  allowGlobalContext: true,
  dbName: 'lireddit',
  type: 'postgresql',
  debug: !__prod__,
  password: '2d3a0n9i9e1l',
} as Parameters<typeof MikroORM.init>[0];
