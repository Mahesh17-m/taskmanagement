import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component'; // Import ManagerComponent
import { EmployerComponent } from './employer/employer.component'; // Import EmployerComponent
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { TaskAssignmentComponent } from './manager/task-assignment/task-assignment.component';
import { TasksStatusComponent } from './manager/tasks-status/tasks-status.component';
import { TasksComponent } from './employer/tasks/tasks.component';
import { TaskStatusComponent } from './employer/task-status/task-status.component';
import { TaskDeadlinesComponent } from './employer/task-deadlines/task-deadlines.component';
import { CalendarComponent } from './manager/calendar/calendar.component';

export const routes: Routes = [
  {
    path: 'manager',
    component: ManagerComponent,
    children: [
      { path: 'task-assignment', component: TaskAssignmentComponent },
      { path: 'tasks-status', component: TasksStatusComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: '', redirectTo: 'task-assignment', pathMatch: 'full' }, // Default child route
    ],
  }, // Define manager route
  { path: 'employer', component: EmployerComponent,
    children:[
        { path: 'tasks', component: TasksComponent },
        { path: 'task-status', component: TaskStatusComponent },
        { path: 'task-deadlines', component: TaskDeadlinesComponent },
        { path: '', redirectTo: 'tasks', pathMatch: 'full' }, // Default child route
      ],
    
   }, // Define employer route
  { path: 'login', component: LoginComponent }, // Define login route
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}