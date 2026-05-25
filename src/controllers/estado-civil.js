import * as estadoCivilRepositorio from "../../db/estado-civil.js";

const obtenerEstadosCiviles = async (ctx) => {
    const estados_civiles = await estadoCivilRepositorio.lista_estados_civiles();
    ctx.status = 200;
    ctx.body = estados_civiles;
}

const obtenerEstadoCivilPorId = async (ctx) => {
    const { id } = ctx.params;
    const estado_civil = await estadoCivilRepositorio.estado_civil_por_id(id);
    ctx.status = 200;
    ctx.body = estado_civil;
}

export {
    obtenerEstadosCiviles,
    obtenerEstadoCivilPorId
}