import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employer',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './employer.component.html',
  styleUrl: './employer.component.css'
})
export class EmployerComponent {
 constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']); // Navigate to login page
  }
}
