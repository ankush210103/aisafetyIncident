import { Incident, IncidentDocument } from '../interfaces/incident.interface';
import IncidentModel from '../models/incident.model';

export const createIncident = async (incidentData: Incident): Promise<IncidentDocument> => {
  const incident = new IncidentModel(incidentData);
  return await incident.save();
};

export const getAllIncidents = async (): Promise<IncidentDocument[]> => {
  return await IncidentModel.find().sort({ reported_at: -1 });
};

export const getIncidentById = async (id: string): Promise<IncidentDocument | null> => {
  return await IncidentModel.findById(id);
};

export const deleteIncidentById = async (id: string): Promise<IncidentDocument | null> => {
  return await IncidentModel.findByIdAndDelete(id);
};