import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MachinesService } from 'src/app/services/machines.service';
import { Machines } from 'src/app/models/machines.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GymService } from 'src/app/services/gym.service';
import { Gym } from 'src/app/models/gym.model';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent implements OnInit {
  machineForm!: FormGroup;
  gymId!: number;
  gym!: Gym;

  constructor(
    private fb: FormBuilder,
    private machinesService: MachinesService,
    private gymService: GymService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gymId = Number(this.route.snapshot.paramMap.get('gymId'));
    
    // Load gym details
    this.gymService.getGymById(this.gymId).subscribe(gym => {
      this.gym = gym;
    });

    this.machineForm = this.fb.group({
      machine_name: ['', Validators.required],
      muscles_touched: ['', Validators.required],
      activities_included: ['', Validators.required],
      machine_3d: ['']
    });
  }

  addMachine(): void {
    if (this.machineForm.valid) {
      const newMachine: Machines = {
        ...this.machineForm.value,
        gym: { gym_id: this.gymId } as Gym
      };

      this.machinesService.addMachines(newMachine).subscribe(response => {
        console.log('Machine added successfully!', response);
        this.router.navigate(['/extrapages/machines', this.gymId]);
      });
    }
  }
}