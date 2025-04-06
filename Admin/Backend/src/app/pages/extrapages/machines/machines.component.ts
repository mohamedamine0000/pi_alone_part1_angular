import { Component, OnInit } from '@angular/core';
import { Machines } from 'src/app/models/machines.model';
import { MachinesService } from 'src/app/services/machines.service';
import { ActivatedRoute } from '@angular/router';
import { Gym } from 'src/app/models/gym.model';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  machines: Machines[] = [];
  gym!: Gym;
  gymId!: number;

  constructor(
    private machinesService: MachinesService,
    private gymService: GymService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.gymId = Number(this.route.snapshot.paramMap.get('gymId'));
    
    // Load gym details
    this.gymService.getGymById(this.gymId).subscribe(gym => {
      this.gym = gym;
    });

    // Load machines for this gym
    this.loadMachines();
  }

  loadMachines(): void {
    this.machinesService.getMachines().subscribe((data) => {
      // Filter machines for this gym
      this.machines = data.filter(machine => machine.gym?.gym_id === this.gymId);
    });
  }

  deleteMachine(machineId: number): void {
    this.machinesService.deleteMachines(machineId).subscribe(() => {
      // Remove deleted machine from the list
      this.machines = this.machines.filter(machine => machine.machine_id !== machineId);
      console.log('Machine deleted successfully');
    });
  }
}