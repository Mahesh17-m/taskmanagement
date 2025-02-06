import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-assignment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './task-assignment.component.html',
  styleUrl: './task-assignment.component.css'
})
export class TaskAssignmentComponent {

  employees = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' }
  ];

  task = {
    employeeId: '',
    title: '',
    description: '',
    deadline: ''
  };

  assignedTasks: any[] = [];

  assignTask() {
    const selectedEmployee = this.employees.find(emp => emp.id === this.task.employeeId);
    if (selectedEmployee) {
      this.assignedTasks.push({
        ...this.task,
        employeeName: selectedEmployee.name
      });

      // Reset form
      this.task = { employeeId: '', title: '', description: '', deadline: '' };
    }
  }
}
