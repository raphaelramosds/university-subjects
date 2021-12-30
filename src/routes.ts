import express from 'express';
import SubjectController from './controllers/SubjectController';

export const router = express.Router();

// c
router.post('/subjects', SubjectController.create);
// r
router.get('/subjects', SubjectController.findAll);
router.get('/subjects/:subjectId', SubjectController.findOne);
// u
router.put('/subjects/:subjectId', SubjectController.update);
// d
router.delete('/subjects/:subjectId', SubjectController.destroy);