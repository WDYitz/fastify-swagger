import zod from 'zod';

const schema = zod.object({
  NODE_ENV: zod.string().default('development'),
  PORT: zod.number().default(3000),
});

export const env = schema.parse(process.env);