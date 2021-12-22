import { Sequelize } from 'sequelize'

export const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, 
    {
        dialect: 'mysql',
        port: +process.env.DB_PORT
    }
);
