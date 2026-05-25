import { verifyToken } from "./src/utils/tokenGenerator.js"

export const errorCatcherMdw = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.status = err?.cause?.code ?? 500
        ctx.body = err?.message ?? 'unknown error'
        ctx.app.emit('error', err, ctx)
    }
}

export const validateTokenMiddleware = async (ctx, next) => {
    const BEARER_START = 'Bearer '
    const checkStringStartWith = (str, start) => str.startsWith(start)

    function checkTokenExists(token) {
        if (!token) {
            throw new Error('Token not found')
        }

        if (!checkStringStartWith(token, BEARER_START)) {
            throw new Error('Token invalid format')
        }

        const bearerJwt = token.split(BEARER_START)[1]
        return bearerJwt
    }

    const token = checkTokenExists(ctx.headers.authorization)

    try {
        ctx.currentUser = await verifyToken(token)
    } catch (error) {
        throw new Error('Error parsing token')
    }
    await next()
}