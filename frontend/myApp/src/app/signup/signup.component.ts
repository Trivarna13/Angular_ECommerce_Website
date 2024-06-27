import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  async handleSubmit(event: Event) {
    event.preventDefault();
    // console.log('Name:', this.email);
    // console.log('Email:', this.email);
    // console.log('Password:', this.password);
    try {
      const response = await axios.post('http://localhost:8081/signup', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
