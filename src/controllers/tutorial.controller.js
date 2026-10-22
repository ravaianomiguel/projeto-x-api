import { Tutorial } from "../models/tutorial.model";

export async function getAll(req, res) {
  try {
    const tutoriais = await Tutorial.findAll();
    return res.json(tutoriais);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao listar tutoriais.', detalhes: erro.message });
  }
}

export async function getById(req, res) {
  try {
    const tutorial = await Tutorial.findByPk(req.params.id);
    if(!tutorial) return res.status(404).json({
      erro: "tutorial nao encontrado"
    })
    return res.json(tutorial);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao listar tutorial.', detalhes: erro.message });
  }
}

export async function criar(req, res) {
  try {
    const { usuarioId, title, content } = req.body;

    if (!title || !content || !usuarioId) {
      return res.status(400).json({ erro: 'campos faltando' });
    }

    const tutorial = await Tutorial.create({
      title, content, usuarioId
    });

    return res.status(201).json(tutorial);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao criar tutorial.', detalhes: erro.message });
  }
}

async function remover(req, res) {
  try {
    const tutorial = await Tutorial.findByPk(req.params.id);

    if (!tutorial) {
      return res.status(404).json({ erro: 'Livro não encontrado.' });
    }

    if (tutorial.usuarioId !== req.usuarioId) {
      return res.status(403).json({ erro: 'Você não tem permissão para remover este registro.' });
    }

    await tutorial.destroy();

    return res.status(204).send();
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao remover tutorial.', detalhes: erro.message });
  }
}
