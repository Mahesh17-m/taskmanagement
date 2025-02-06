import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-task-deadlines',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './task-deadlines.component.html',
  styleUrl: './task-deadlines.component.css'
})
export class TaskDeadlinesComponent {
  view: [number, number] = [700, 400]; // Chart size

  // Sample Task Progress Data
  taskProgress = [
    { name: 'Completed', value: 5 },
    { name: 'In Progress', value: 3 },
    { name: 'Pending', value: 2 }
  ];

  // Color scheme
  colorScheme = {
    domain: ['#28a745', '#ffc107', '#dc3545'] // Green, Yellow, Red
  }as any;
  
}
