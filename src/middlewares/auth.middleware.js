import jwt from "jsonwebtoken"

export function autenticar(req, res, next) {
  const [type, token] = req.headers.authorization?.split(' ') || ['',false];
  if(type != "Bearer" || !token){
    return res.status(401).json({
      message: "Token Inválido"
    })
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "SegredoSecreto");
    req.usuarioId = payload.id;
    next();
  } catch {
    return res.status(401).json({
      message: "Token invalido ou expirado"
    })
  }
}