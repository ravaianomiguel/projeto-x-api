import { Sequelize } from 'sequelize';
import path from 'path';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_STORAGE || "./database.sqlite", //path.join(__dirname, '..', '..', process.env.DB_STORAGE || 'database.sqlite'),
  logging: false,
});
