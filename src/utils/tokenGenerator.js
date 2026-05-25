import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY

export function tokenGenerator(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "30m" });
}

export function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY)
}
