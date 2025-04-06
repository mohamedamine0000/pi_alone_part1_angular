import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MachinesService } from 'src/app/services/machines.service';
import { Machines } from 'src/app/models/machines.model';
import { GymService } from 'src/app/services/gym.service';
import { Gym } from 'src/app/models/gym.model';

@Component({
  selector: 'app-update-machine',
  templateUrl: './update-machine.component.html',
  styleUrls: ['./update-machine.component.scss']
})
export class UpdateMachineComponent implements OnInit {
  machineForm!: FormGroup;
  machineId!: number;
  gym!: Gym;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private machinesService: MachinesService,
    private gymService: GymService
  ) {}

  ngOnInit(): void {
    this.machineId = Number(this.route.snapshot.paramMap.get('id'));

    this.machineForm = this.fb.group({
      machine_name: ['', Validators.required],
      muscles_touched: ['', Validators.required],
      activities_included: ['', Validators.required],
      machine_3d: ['']
    });

    // Load machine details
    this.machinesService.getMachinesById(this.machineId).subscribe(machine => {
      this.machineForm.patchValue(machine);
      
      // Load gym details
      if (machine.gym?.gym_id) {
        this.gymService.getGymById(machine.gym.gym_id).subscribe(gym => {
          this.gym = gym;
        });
      }
    });
  }

  updateMachine(): void {
    if (this.machineForm.valid) {
      const updatedMachine: Machines = {
        machine_id: this.machineId,
        ...this.machineForm.value,
        gym: this.gym
      };

      this.machinesService.updateMachines(updatedMachine).subscribe(response => {
        console.log('Machine updated successfully!', response);
        this.router.navigate(['/extrapages/machines', this.gym.gym_id]);
      });
    }
  }
}