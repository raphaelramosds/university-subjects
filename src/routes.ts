import express from 'express';
import SubjectController from './controllers/SubjectController';

export const router = express.Router();

// C
router.post('/subjects', SubjectController.create);
// R
router.get('/subjects', SubjectController.findAll);
router.get('/subjects/:subjectId', SubjectController.findOne);
router.get('/subjects/workloads/sum', SubjectController.sumWorkloads);
// U
router.put('/subjects/:subjectId', SubjectController.update);
// D
router.delete('/subjects/:subjectId', SubjectController.destroy);