import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import createEmailAuth from "./methods/auth/email/create.ts";
import IEmail from "./types/auth/email.ts";
import loginUserAuth from "./methods/auth/email/singin.ts";

const app = new Application();
const router = new Router();

app.use(oakCors({ origin: '*' }));

router
  .get("/", (ctx) => {
    ctx.response.body = "See the github repo";
  })
  .post("/auth/email/create", async (ctx) => {
    const body: IEmail = await ctx.request.body().value;
    const { name, email, pass, pass2 } = body;

    try {
      const res = await createEmailAuth(name, email, pass, pass2);
      ctx.response.body = { message: res }; 
    } catch (err) {
      ctx.response.body = { error: err };
    }
  })
  .post("/auth/email/login/", async (ctx) => {
    const body: { email: string; password: string } = await ctx.request.body().value;
    const { email, password } = body;

    try {
      const res = await loginUserAuth(email, password);
      ctx.response.body = { message: res }; 
    } catch (err) {
      ctx.response.body = { error: err };
    }
  })
  .get("/points/get", (ctx) => {})
  .put("/points/put", (ctx) => {});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });