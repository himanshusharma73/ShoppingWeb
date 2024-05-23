import { Component } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  addUser(data :any): void {
    this.authService.register(data).subscribe(
      result => {
        console.log('User registered successfully', result);
        alert('User registered successfully');
        this.router.navigate(['/homepage']);
      },
      error => {
        this.errorMessage = error.error.message;
        console.error('Error registering user', error);
      }
    );
  }
}
