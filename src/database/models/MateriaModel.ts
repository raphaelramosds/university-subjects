import { DataTypes } from 'sequelize';
import { db } from '../db';

export const MateriaModel = db.define("materia", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ch: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    obrigatoria: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});