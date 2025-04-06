import { Event } from './event.model';
import { Activities } from './activities.model';
import { Machines } from './machines.model';
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
  machines: Machines[];
}

