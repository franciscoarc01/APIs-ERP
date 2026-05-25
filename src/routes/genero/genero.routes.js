import Router from "@koa/router";
import * as generoController from "../../controllers/genero.js";

const router = new Router({
    prefix: '/genero'
})

router.get('/', generoController.obtenerGeneros)
router.get('/:id', generoController.obtenerGeneroPorId)

export { router }