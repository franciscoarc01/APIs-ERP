import Router from "@koa/router";
import * as estadoCivilController from "../../controllers/estado-civil.js";

const router = new Router({
    prefix: '/estado-civil'
})

router.get('/', estadoCivilController.obtenerEstadosCiviles)
router.get('/:id', estadoCivilController.obtenerEstadoCivilPorId)

export { router }