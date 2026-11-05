import { Usuario } from "../models/usuario.model";
import bcrypt from "bcryptjs"

export async function startOAuth(req, res) {
  const state = bcrypt.randomBytes(16).toString("hex");

  res.cookie("oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 10 * 60 * 1000,
    secure: process.env.NODE_ENV === "production",
  });

  res.redirect(buildAuthorizeUrl(state));
};

export async function OAuthCallback (req, res) {
  const { code, state, error } = req.query;


  if (error) {
    return res.redirect(`/?error=${encodeURIComponent(error)}`);
  }


  if (!code || !state || state !== req.cookies.oauth_state) {
    return res.status(400).json({ message: "State inválido ou code ausente" });
  }
  res.clearCookie("oauth_state");

  try {
    const accessToken = await exchangeCodeForToken(code);
    const profile = await fetchGithubUser(accessToken);

    const user = await Usuario.findOne({
      where: {githubId: String(profile.id)},
    })

    if (!user) {
      await Usuario.create({
      githubId: profile.id,
      username: bcrypt.randomBytes(16).toString("hex"),
      senha: senhaCriptografada,
      realname: "",
      photo: "",
      biography: "",
    });
    }

    if(!user.githubId){
      user.githubId = profile.id;
    }
  
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

  
    res.redirect(`/#token=${token}`);
  } catch (err) {
    console.error("Erro no callback OAuth:", err.message);
    res.redirect(`/?error=${encodeURIComponent("Falha na autenticação")}`);
  }
}