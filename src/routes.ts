import express from 'express';

import CreateSubjectController from './controllers/CreateSubjectController';
import ListSubjectController from './controllers/ListSubjectController';
import DestroySubjectController from './controllers/DestroySubjectController';
import FetchSumWorkloads from './controllers/FetchSumWorkloads';

export const router = express.Router();

router.post('/subjects', CreateSubjectController.handle);
router.get('/subjects', ListSubjectController.handle);
router.get('/subjects/workloads/sum', FetchSumWorkloads.handle);
router.delete('/subjects/:subjectId', DestroySubjectController.handle);