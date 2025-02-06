import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployerComponent } from './employer/employer.component';
import { TaskAssignmentComponent } from './manager/task-assignment/task-assignment.component';
import { TasksStatusComponent } from './manager/tasks-status/tasks-status.component';
import { CalendarComponent } from './manager/calendar/calendar.component';
import { TasksComponent } from './employer/tasks/tasks.component';
import { TaskStatusComponent } from './employer/task-status/task-status.component';
import { TaskDeadlinesComponent } from './employer/task-deadlines/task-deadlines.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,ManagerComponent,EmployerComponent,TaskAssignmentComponent,TasksStatusComponent,CalendarComponent,TasksComponent,TaskStatusComponent,TaskDeadlinesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmanagement';
}
