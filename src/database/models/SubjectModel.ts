import { DataTypes } from 'sequelize';
import { db } from '../db';

export const SubjectModel = db.define("subject", {
    id: {
        type: DataTypes.STRING,
        autoIncrement: false,
        primaryKey: true
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ch: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mandatory: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});