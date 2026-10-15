import { sequelize } from '../config/database';
import { Usuario } from './usuario.model';
import { Foto } from './foto.model';
import { Interacao } from './interacao.model';
import { Tutorial } from './tutorial.model';

Usuario.hasMany(Tutorial, {
   as: "tutorials",
   foreignKey: "usuarioId"
})
Tutorial.belongsTo(Usuario, {
   foreignKey: "ususarioId",
   as: 'usuario'
})
Usuario.hasMany(Interacao, {
   as: "interacoes",
   foreignKey: "usuarioId"
})
Interacao.belongsTo(Usuario, {
   foreignKey: "ususarioId",
   as: 'usuario'
})
Tutorial.hasMany(Interacao, {
   as: "interacoes",
   foreignKey: "tutorialId"
})
Interacao.belongsTo(Tutorial, {
   foreignKey: "tutorialId",
   as: 'tutorial'
})
Interacao.hasMany(Foto, {
   as: "fotos",
   foreignKey: "interacaoId"
})
Foto.belongsTo(Interacao, {
   foreignKey: "interacao ee vId",
   as: 'interacao'
})