import { FastifyInstance } from "fastify";
import { CreateUserSchema } from "../../validators/create-user-schema";
import { UserFactory } from "../factory/UserFactory";
import { CreateUserUseCase } from "../use-cases/create-user-useCase";

const userFactory = UserFactory();

export const userController = (app: FastifyInstance) => {
  app.get("/users", { schema: { description: "List all users", tags: ["users"] } }, async (request, reply) => {
    return reply.code(200).send({ users: [] });
  });

  app.post("/users", { schema: { body: CreateUserSchema, description: "Create a new user", tags: ["users"] } }, async (request, reply) => {
    const safeData = CreateUserSchema.safeParse(request.body);

    if (!safeData.success) {
      return reply.code(400).send({ error: safeData.error });
    }

    const createUserUseCase = new CreateUserUseCase(userFactory);

    await createUserUseCase.execute(
      {
        email: safeData.data?.email,
        name: safeData.data?.name
      }
    );
  });
}