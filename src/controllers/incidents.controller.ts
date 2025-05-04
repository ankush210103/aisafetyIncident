import { Request, Response } from 'express';
import {
  createIncident,
  getAllIncidents,
  getIncidentById,
  deleteIncidentById
} from '../services/incidents.service';
import { Incident } from '../interfaces/incident.interface';

export const createIncidentHandler = async (req: Request, res: Response) => {
  try {
    const incidentData: Incident = req.body;
    const incident = await createIncident(incidentData);
    res.status(201).json(incident);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllIncidentsHandler = async (_req: Request, res: Response) => {
  try {
    const incidents = await getAllIncidents();
    res.status(200).json(incidents);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getIncidentByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const incident = await getIncidentById(id);
    
    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }
    
    res.status(200).json(incident);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteIncidentByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const incident = await deleteIncidentById(id);
    
    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }
    
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};