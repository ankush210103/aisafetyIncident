import { Router } from 'express';
import {
  createIncidentHandler,
  getAllIncidentsHandler,
  getIncidentByIdHandler,
  deleteIncidentByIdHandler
} from '../controllers/incidents.controller';

const router = Router();

router.post('/', createIncidentHandler);
router.get('/', getAllIncidentsHandler);
router.get('/:id', getIncidentByIdHandler);
router.delete('/:id', deleteIncidentByIdHandler);

export default router;