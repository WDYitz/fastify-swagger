import type { FastifyInstance } from "fastify";
import { userController } from "../controllers/user-controller";

export const routes = (app: FastifyInstance) => {
  app.register(userController)
}