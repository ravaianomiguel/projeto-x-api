import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const Interacao = sequelize.define('Interacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  desc: {
    type: DataTypes.STRING(1000),
  },
}, {
  tableName: 'interacoes',
});