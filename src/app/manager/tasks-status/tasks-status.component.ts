import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-status',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tasks-status.component.html',
  styleUrl: './tasks-status.component.css'
})
export class TasksStatusComponent {
  employeeTasks = [
    { id: 1, title: 'Design UI', description: 'Create login page UI', deadline: '2025-02-10', status: 'Pending' },
    { id: 2, title: 'Backend API', description: 'Develop authentication API', deadline: '2025-02-12', status: 'In Progress' },
    { id: 3, title: 'Database Setup', description: 'Setup PostgreSQL database', deadline: '2025-02-15', status: 'Pending' }
  ];

}

