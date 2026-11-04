import { Foto } from "../models/foto.model.js";

export async function getByInteracao(req, res) {
  if(!req.body.interacaoId){
    return res.status(400).json({ erro: 'campos faltando' });
  }
  try {
    const fotos = await Foto.findAll({
      where: { interacaoIdId: req.body.interacaoId }
    });
    return res.json(fotos);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao listar fotos.', detalhes: erro.message });
  }
}

export async function criar(req, res) {
  try {
    const { picture, interacaoId } = req.body;

    if (!picture || !interacaoId) {
      return res.status(400).json({ erro: 'campos faltando' });
    }

    const foto = await Foto.create({
      interacaoId, picture
    });

    return res.status(201).json(foto);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao criar foto.', detalhes: erro.message });
  }
}
