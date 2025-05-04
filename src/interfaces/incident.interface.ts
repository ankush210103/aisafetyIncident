export interface Incident {
    title: string;
    description: string;
    severity: 'Low' | 'Medium' | 'High';
    reported_at?: Date;
  }
  
  export interface IncidentDocument extends Incident {
    _id: string;
    __v?: number;
  }