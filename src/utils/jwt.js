import jwt from "jsonwebtoken"
export function gerarToken(usuarioId) {
  return jwt.sign(
    {id: usuarioId},
    process.env.JWT_SECRET || "SegredoSecreto",
    {expiresIn: process.env.JWT_EXPIRES_IN || "1h"}
  )
}
