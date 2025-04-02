import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from 'src/app/services/gym.service';
import { Gym } from 'src/app/models/gym.model';

@Component({
  selector: 'app-add-gym',
  templateUrl: './add-gym.component.html',
  styleUrls: ['./add-gym.component.scss']
})
export class AddGymComponent implements OnInit {
  gymForm!: FormGroup;
  daysEnum = ['MondayToSaturday', 'FullWeek', 'MondayToFriday']; // List of open days

  constructor(
    private fb: FormBuilder,
    private gymService: GymService
  ) {}

  ngOnInit(): void {
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
  }

  // Handle form submission
  addGym(): void {
    if (this.gymForm.valid) {
      const newGym: Gym = this.gymForm.value;

      this.gymService.addGym(newGym).subscribe(response => {
        console.log('Gym added successfully!', response);
      });
    }
  }
}
