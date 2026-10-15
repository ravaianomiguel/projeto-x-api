import { Interacao } from '../models/interacao.model';

export async function getByTutorial(req, res) {
  if(!req.body.tutorialId){
    return res.status(400).json({ erro: 'campos faltando' });
  }
  try {
    const interacoes = await Interacao.findAll({
      where: { tutorialId: req.body.tutorialId },
    });

    return res.json(interacoes);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao listar interacoes.', detalhes: erro.message });
  }
}

export async function getByUsuario(req, res) {
  try {
    const interacoes = await Interacao.findAll({
      where: { usuarioId: req.usuarioId },
    });

    return res.json(interacoes);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao listar interacoes.', detalhes: erro.message });
  }
}

export async function criar(req, res) {
  try {
    const { desc, tutorialId } = req.body;

    if (!desc || !tutorialId) {
      return res.status(400).json({ erro: 'campos faltando' });
    }

    const interacao = await Interacao.create({
      usuarioId: req.usuarioId,
      tutorialId, desc
    });

    return res.status(201).json(desc);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao criar interacao.', detalhes: erro.message });
  }
}

async function remover(req, res) {
  try {
    const interacao = await Interacao.findByPk(req.params.id);

    if (!interacao) {
      return res.status(404).json({ erro: 'Livro não encontrado.' });
    }

    if (interacao.usuarioId !== req.usuarioId) {
      return res.status(403).json({ erro: 'Você não tem permissão para remover este registro.' });
    }

    await interacao.destroy();

    return res.status(204).send();
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao remover interacao.', detalhes: erro.message });
  }
}
