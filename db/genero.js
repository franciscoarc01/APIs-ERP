import { getDatabaseInstance } from "./config.db.js";

const lista_generos = async () => {
    const pool = getDatabaseInstance();
    try {
        const result = await pool.query(`SELECT * FROM "Genero"`);
        pool.end();
        return result.rows;
    } catch (error) {
        console.error("Error al listar los generos:", error);
        throw error;
    }
}

const genero_por_id = async (id) => {
    const pool = getDatabaseInstance();
    try {
        const result = await pool.query(`SELECT * FROM "Genero" WHERE id_genero = $1`, [id]);
        pool.end();
        return result.rows[0];
    } catch (error) {
        console.error("Error al obtener el genero:", error);
        throw error;
    }
}

export {
    lista_generos,
    genero_por_id
}

