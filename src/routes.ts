import express from 'express';
import MateriaController from './controllers/MateriaController';

export const router = express.Router();

// c
router.post('/materias', MateriaController.create);
// r
router.get('/materias', MateriaController.findAll);
router.get('/materias/:materiaId', MateriaController.findOne);
// u
router.put('/materias/:materiaId', MateriaController.update);
// d
router.delete('/materias/:materiaId', MateriaController.destroy);