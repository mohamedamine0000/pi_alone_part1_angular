import { Event } from './event.model';
import { Activities } from './activities.model';

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

export function mapBackendToFrontend(gym: any): Gym {
  // Mapping snake_case from the backend to camelCase
  return {
    gym_id: gym.gym_id,
    gymName: gym.gym_name,  // Map snake_case 'gym_name' to camelCase 'gymName'
    location: gym.location,
    subscription_fee: gym.subscription_fee,
    num_members: gym.num_members,
    number_machines: gym.number_machines,
    open_days: gym.open_days,
    numbercoaches: gym.numbercoaches,
    open_hours: gym.open_hours,
    gym_3d: gym.gym_3d,
    events: gym.events,
    activities: gym.activities,
  };
}