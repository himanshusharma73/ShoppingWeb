import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginDto = {
    email: '',
    password: '',
  };

  constructor(private authService : AuthService, private router: Router) {}

  login(){
    this.authService.login(this.loginDto).subscribe(
      (response) => {
        localStorage.setItem('authToken', response.data.user.token);
        this.router.navigate(['/homepage']);
      },
      (error) => {
        console.error('Authentication failed', error);
      alert('Authentication failed. Please check your email and password.');
      }
    );
  }
  
}







