import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  async handleSubmit(event: Event) {
    event.preventDefault();
    // console.log('Email:', this.email);
    // console.log('Password:', this.password);
    try {
      const response = await axios.post('http://localhost:8081/login', {
        email: this.email,
        password: this.password,
      });
      if (response.data === 'Success') {
        this.router.navigate(['/home']);
      } else {
        alert('No record existed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
