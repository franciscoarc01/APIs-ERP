import { getDatabaseInstance } from "./config.db.js";

const lista_estados_civiles = async () => {
    const pool = getDatabaseInstance();
    try {
        const result = await pool.query(`SELECT * FROM "Estado_Civil"`);
        pool.end();
        return result.rows;
    } catch (error) {
        console.error("Error al listar los estados civiles:", error);
        throw error;
    }
}

const estado_civil_por_id = async (id) => {
    const pool = getDatabaseInstance();
    try {
        const result = await pool.query(`SELECT * FROM "Estado_Civil" WHERE id_estado_civil = $1`, [id]);
        pool.end();
        return result.rows[0];
    } catch (error) {
        console.error("Error al obtener el estado civil:", error);
        throw error;
    }
}

export {
    lista_estados_civiles,
    estado_civil_por_id
}