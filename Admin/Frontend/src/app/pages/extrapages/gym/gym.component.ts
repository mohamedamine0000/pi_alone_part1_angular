import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Gym } from 'src/app/models/gym.model';
import { GymService } from 'src/app/services/gym.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrl: './gym.component.scss'
})

  export class GymComponent implements OnInit {
    gyms: Gym[] = [];
  
    constructor(private gymService: GymService,  private router: Router) {}
  
    ngOnInit(): void {
      this.gymService.getGyms().subscribe((data) => {
        this.gyms = data;
      });
    }

    deleteGym(gymId: number): void {
      this.gymService.deleteGym(gymId).subscribe(() => {
        // Remove deleted gym from the list
        this.gyms = this.gyms.filter(gym => gym.gym_id !== gymId);
        console.log('Gym deleted successfully');
      });
    }

    viewDetails(gymId: number): void {
      this.router.navigate(['/extrapages/gym-details', gymId]);  // Navigate with gym ID
    }
    
  }

