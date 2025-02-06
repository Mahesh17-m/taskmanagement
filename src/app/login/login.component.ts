import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      adminRole: ['', Validators.required], // Admin role is required
      email: ['', [Validators.required, Validators.email]], // Email is required and must be valid
      password: ['', Validators.required] // Password is required
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return; // If the form is invalid, do nothing
    }

    const selectedRole = this.loginForm.get('adminRole')?.value;

    // Redirect based on the selected role
    if (selectedRole === 'admin1') {
      this.router.navigate(['/manager']); // Redirect to Manager component
    } else if (selectedRole === 'admin2') {
      this.router.navigate(['/employer']); // Redirect to Employer component
    }
  }
}