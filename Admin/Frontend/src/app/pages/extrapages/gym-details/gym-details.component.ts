import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GymService } from 'src/app/services/gym.service';
import { Gym } from 'src/app/models/gym.model';

@Component({
  selector: 'app-gym-details',
  templateUrl: './gym-details.component.html',
  styleUrls: ['./gym-details.component.scss']
})
export class GymDetailsComponent implements OnInit {
  gym: Gym | null = null;  // Initialize as null instead of empty object
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private gymService: GymService
  ) {}

  ngOnInit(): void {
    const gymId = this.route.snapshot.paramMap.get('id');
    
    if (gymId) {
      this.gymService.getGymById(+gymId).subscribe({
        next: (data) => {
          this.gym = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to load gym details';
          this.isLoading = false;
          console.error('Error loading gym:', err);
        }
      });
    } else {
      this.error = 'Invalid gym ID';
      this.isLoading = false;
    }
  }
}