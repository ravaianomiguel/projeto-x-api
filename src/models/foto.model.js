import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const Foto = sequelize.define('Foto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'fotos',
});