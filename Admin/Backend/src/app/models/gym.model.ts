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

// Add a separate interface for backend data
export interface BackendGym {
  gym_id: number;
  gym_name: string;
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

// Utility function to convert between formats
export function toBackendGym(gym: Gym): BackendGym {
  return {
    ...gym,
    gym_name: gym.gymName
  };
}

export function toFrontendGym(gym: BackendGym): Gym {
  return {
    ...gym,
    gymName: gym.gym_name
  };
}