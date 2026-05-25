import Koa from "koa";
import { koaBody } from 'koa-body';
import { errorCatcherMdw } from './middlewares.js';
import router from "./src/routes/index.js";

const app = new Koa();

app.use(errorCatcherMdw)
app.use(koaBody({
    json: true,
    form: true,
    urlencoded: true,
    multipart: true,
    text: true,
    formidable: {
        keepExtensions: true,
        multiples: true
    }
}));

app.use(router.routes()).use(router.allowedMethods())

app.listen(3100, () => {
    console.log("Server running at http://localhost:3100");
});