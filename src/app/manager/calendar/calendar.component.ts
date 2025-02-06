import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  tasks = [
    { id: 1, title: 'Create UI Design', assignedTo: 'John Doe', deadline: '2025-02-10' },
    { id: 2, title: 'Develop API', assignedTo: 'Jane Smith', deadline: '2025-02-12' },
    { id: 3, title: 'Database Migration', assignedTo: 'Alice Johnson', deadline: '2025-02-15' }
  ];

  updateDeadline(task: any) {
    alert(`Deadline for "${task.title}" updated to: ${task.deadline}`);
  }
}