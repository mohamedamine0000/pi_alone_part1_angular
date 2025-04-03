import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GymService } from 'src/app/services/gym.service';
import { Gym } from 'src/app/models/gym.model';
import { Activities } from 'src/app/models/activities.model';
import { Event } from 'src/app/models/event.model';
import { ActivitiesService } from 'src/app/services/activities.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-update-gym',
  templateUrl: './update-gym.component.html',
  styleUrls: ['./update-gym.component.scss']
})
export class UpdateGymComponent implements OnInit {
  gymForm!: FormGroup;
  daysEnum = ['MondayToSaturday', 'FullWeek', 'MondayToFriday'];

  activities: Activities[] = [];
  events: Event[] = [];
  selectedActivities: number[] = [];
  selectedEvents: number[] = [];
  gymId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private gymService: GymService,
    private activitiesService: ActivitiesService,
    private eventService: EventService
  ) {}
  ngOnInit(): void {
    // Get gym ID from URL
    this.gymId = Number(this.route.snapshot.paramMap.get('id'));
  
    // Initialize the form
    this.gymForm = this.fb.group({
      gymName: ['', Validators.required],
      location: ['', Validators.required],
      subscription_fee: [0, Validators.required],
      num_members: [0, Validators.required],
      number_machines: [0, Validators.required],
      open_days: ['', Validators.required],
      numbercoaches: [0, Validators.required],
      open_hours: ['', Validators.required],
      gym_3d: ['', Validators.required]
    });
  
    // Load gym details
    this.gymService.getGymById(this.gymId).subscribe(gym => {
      // Map gym_name from the API response to gymName for the form
      const mappedGym = {
        ...gym,
        gymName: (gym as any).gym_name  // Map snake_case to camelCase
      };
      this.gymForm.patchValue(mappedGym);  // This should correctly patch gymName and other fields
  
      this.selectedActivities = gym.activities?.map(a => a.activity_id) || [];
      this.selectedEvents = gym.events?.map(e => e.id_event) || [];
  
      console.log('Loaded Gym:', gym);  // Debugging to check if the gym data is loaded
      console.log('Selected Events:', this.selectedEvents);  // Check selected events
    });
  
    // Fetch activities and events
    this.activitiesService.getActivities().subscribe(data => this.activities = data);
    this.eventService.getEvents().subscribe(data => this.events = data);
  }

  toggleActivity(activityId: number) {
    if (this.selectedActivities.includes(activityId)) {
      this.selectedActivities = this.selectedActivities.filter(id => id !== activityId);
    } else {
      this.selectedActivities.push(activityId);
    }
  }

  toggleEvent(eventId: number) {
    if (this.selectedEvents.includes(eventId)) {
      this.selectedEvents = this.selectedEvents.filter(id => id !== eventId);
    } else {
      this.selectedEvents.push(eventId);
    }
  }

  updateGym(): void {
    if (this.gymForm.valid) {
      const updatedGym: Gym = {
        gym_id: this.gymId,
        ...this.gymForm.value,
        events: this.selectedEvents.map(id => ({ id_event: id } as Event)),
        activities: this.selectedActivities.map(id => ({ activity_id: id } as Activities))
      };

      this.gymService.updateGym(updatedGym).subscribe(response => {
        console.log('Gym updated successfully!', response);
      });
    }
  }
}
