import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
  },
  realname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
  },
  biography: {
    type: DataTypes.STRING(1000)
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'usuarios',
});