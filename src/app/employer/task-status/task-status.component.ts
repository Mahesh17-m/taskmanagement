import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-status',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.css'
})
export class TaskStatusComponent {
  employeeTasks = [
    { id: 1, title: 'Design UI', description: 'Create login page UI', deadline: '2025-02-10', status: 'Pending' },
    { id: 2, title: 'Backend API', description: 'Develop authentication API', deadline: '2025-02-12', status: 'In Progress' },
    { id: 3, title: 'Database Setup', description: 'Setup PostgreSQL database', deadline: '2025-02-15', status: 'Pending' }
  ];

  updateStatus(task: any) {
    alert(`Task "${task.title}" status updated to: ${task.status}`);
  }
}
