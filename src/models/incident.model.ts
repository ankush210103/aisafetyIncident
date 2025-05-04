import { Schema, model } from 'mongoose';
import { Incident } from '../interfaces/incident.interface';

const IncidentSchema = new Schema<Incident>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  severity: {
    type: String,
    required: [true, 'Severity is required'],
    enum: {
      values: ['Low', 'Medium', 'High'],
      message: 'Severity must be either Low, Medium, or High'
    }
  },
  reported_at: {
    type: Date,
    default: Date.now
  }
});

export default model<Incident>('Incident', IncidentSchema);