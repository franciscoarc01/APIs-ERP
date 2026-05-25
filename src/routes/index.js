import Router from "@koa/router"
import estadoCivilRoutes from "./estado-civil/index.js"
import generoRoutes from "./genero/index.js"

const router = new Router({
    prefix: '/api'
})

router.use(estadoCivilRoutes.routes(), estadoCivilRoutes.allowedMethods())
router.use(generoRoutes.routes(), generoRoutes.allowedMethods())

export default router