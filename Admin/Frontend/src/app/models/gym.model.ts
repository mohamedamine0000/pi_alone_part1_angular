import { Activities } from 'src/app/models/activities';  
import { Event } from 'src/app/models/event';  // Import Event model

export interface Gym {
  gym_id: number;
  gymName: string;
  location: string;
  subscription_fee: number;
  num_members: number;
  number_machines: number;
  open_days: string;
  numbercoaches: number;
  open_hours: string;
  gym_3d: string;
  events: Event[]; 
  activities: Activities[];
}

