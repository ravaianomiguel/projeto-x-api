import { Usuario } from '../models/usuario.model';

export async function getAll(req, res) {
  try {
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao listar usuarios.', detalhes: erro.message });
  }
}

export async function getById(req, res) {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if(!usuario) return res.status(404).json({
      erro: "usuario nao encontrado"
    })
    return res.json(usuario);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao listar usuarios.', detalhes: erro.message });
  }
}

export async function editar(req, res) {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ erro: 'o id é obrigatorio' });
    }

    const usuario = await Usuario.findByPk(id);

    if(req.body.realname) usuario.realname = req.body.realname;
    if(req.body.photo) usuario.photo = req.body.photo;
    if(req.body.biography) usuario.biography = req.body.biography;
    
    usuario.save();
    return res.sendStatus(200);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao criar interacao.', detalhes: erro.message });
  }
}
