import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = [
    { id: 1, title: 'Design Landing Page', description: 'Create the homepage UI'  },
    { id: 2, title: 'Develop Authentication API', description: 'Create login/logout APIs'},
    { id: 3, title: 'Database Schema Design', description: 'Create schema for users & tasks'  }
  ];
  process(task: any) {
    alert(`Task "${task.title}" task: Started`);
  }
}
