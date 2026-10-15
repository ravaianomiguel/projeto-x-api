import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const Tutorial = sequelize.define('Tutorial', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'tutorials',
});