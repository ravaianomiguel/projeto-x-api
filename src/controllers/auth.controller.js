import bcrypt from 'bcryptjs';
import { Usuario } from '../models/usuario.model.js';
import { gerarToken } from '../utils/jwt.js';

export async function registrar(req, res) {
  try {
    const { username, realname, photo, biography, senha } = req.body;

    if (!username || !senha) {
      return res.status(400).json({ erro: 'nome de usuário e senha são obrigatórios.' });
    }

    const usuarioExistente = await Usuario.findOne({ where: { username } });
    if (usuarioExistente) {
      return res.status(409).json({ erro: 'Já existe um usuário com este username.' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({
      username,
      senha: senhaCriptografada,
      realname: realname ? realname : "",
      photo: photo ? photo : "",
      biography: biography ? biography : "",
    });

    return res.status(201).json({
      id: usuario.id,
      username: usuario.username,
      realname: usuario.realname,
      photo: usuario.photo,
      biography: usuario.biography,
    });
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao registrar usuário.', detalhes: erro.message });
  }
}


export async function login(req, res) {
  try {
    const {username, senha} = req.body;
    if(!username || !senha){
      return res.status(400).json({
        message: "username e senha são obrigatorios"
      })
    }
    const usuario = await Usuario.findOne({where: {username}})
    let senhaValida = false;
    if(usuario){
      senhaValida = await bcrypt.compare(senha, usuario.senha);
    }
    if(!senhaValida){
      return res.status(401).json({
        message: "username ou senha inválidos"
      }) 
    }
    const token = gerarToken(usuario.id);
    return res.json({
      usuario: {
        id: usuario.id,
        username: usuario.username,
      }, token
    });
  } catch(erro) {
    console.log()
    return res.status(500).json({
      message: "Erro ao realizar login"
    })
  }
}


