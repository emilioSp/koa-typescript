import Router from "koa-router";
import Message from "./Message";

const router = new Router();

router.all("/", async ctx => {
    const message = <Message> { msg: 'Hello world!'};
    ctx.body = message;
});

export default router;