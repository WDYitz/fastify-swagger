import { fastify } from 'fastify';
import { fastifyCors } from "@fastify/cors"
import { validatorCompiler, serializerCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';
import { env } from './env';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { routes } from './http/route';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: '*' });

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Typed API',
      version: '1.0.0'
    }
  },
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(routes)

app.listen({ port: env.PORT }, () => {
  console.log(`HTTP Server is running on port ${env.PORT}`);
})