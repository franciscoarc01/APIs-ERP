import * as GeneroRepositorio from "../../db/genero.js";

const obtenerGeneros = async (ctx) => {
    const generos = await GeneroRepositorio.lista_generos();
    ctx.status = 200;
    ctx.body = generos;
}

const obtenerGeneroPorId = async (ctx) => {
    const { id } = ctx.params;
    const genero = await GeneroRepositorio.genero_por_id(id);
    ctx.status = 200;
    ctx.body = genero;
}

export {
    obtenerGeneros,
    obtenerGeneroPorId
}