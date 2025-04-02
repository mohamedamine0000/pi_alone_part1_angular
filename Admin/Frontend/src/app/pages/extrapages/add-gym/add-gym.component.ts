import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from 'src/app/services/gym.service';
import { Gym } from 'src/app/models/gym.model';
import { Activities } from 'src/app/models/activities';
import { Event } from 'src/app/models/event';
import { ActivitiesService } from 'src/app/services/activities.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-gym',
  templateUrl: './add-gym.component.html',
  styleUrls: ['./add-gym.component.scss']
})
export class AddGymComponent implements OnInit {
  gymForm!: FormGroup;
  daysEnum = ['MondayToSaturday', 'FullWeek', 'MondayToFriday'];

  activities: Activities[] = [];
  events: Event[] = [];
  selectedActivities: number[] = [];
  selectedEvents: number[] = [];

  constructor(
    private fb: FormBuilder,
    private gymService: GymService,
    private activitiesService: ActivitiesService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
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

  addGym(): void {
    if (this.gymForm.valid) {
      const newGym: Gym = {
        ...this.gymForm.value,
        events: this.selectedEvents.map(id => ({ id_event: id } as Event)),
        activities: this.selectedActivities.map(id => ({ activity_id: id } as Activities))
      };

      this.gymService.addGym(newGym).subscribe(response => {
        console.log('Gym added successfully!', response);
      });
    }
  }
}