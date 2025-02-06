import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']); // Navigate to login page
  }
}
