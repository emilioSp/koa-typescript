import Router from "@koa/router";
import Koa from "koa";

const router = new Router();

type Message = {
    msg: string
}
router.all("/", async (ctx: Koa.Context) => {
    console.log(process.env.TEST);
    const message = <Message> { msg: 'Hello world!'};
    ctx.body = message;
});

export default router;
