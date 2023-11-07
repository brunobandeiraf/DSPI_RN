import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import createEmailAuth from "./methods/auth/email/create.ts";
import IEmail from "./types/auth/email.ts";
import loginUserAuth from "./methods/auth/email/singin.ts";

const app = new Application();
const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "See the github repo"
  })
  .post("/auth/email/create/", async (ctx) => {
    const body: IEmail = await ctx.request.body().value
    const { name, email, pass, pass2 } = body
    
    createEmailAuth(name, email, pass, pass2)
      .then((res) => {
        ctx.response.body = `message: ${res}`
      })
      .catch((err) => {
        ctx.response.body = `error: ${err}`
      })
  })
  .post("/auth/email/login/", async (ctx) => {
    const body: { email: string; password: string } = await ctx.request.body().value;
    const { email, password } = body

    loginUserAuth(email, password)
      .then((res) => {
        ctx.response.body = `message: ${res}`
      })
      .catch((err) => {
        ctx.response.body = `error: ${err}`
      })
  })
  .get("/points/get", (ctx) => {

  })
  .put("/points/put", (ctx) => {

  })

app.use(router.routes())
app.use(router.allowedMethods());

await app.listen({ port: 8080 })