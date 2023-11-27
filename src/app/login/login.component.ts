import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  id: number=0;
  password: string = '';

  constructor(private users: UsersService, private router: Router) {}

  login(id:number,password:string) {
    this.id=id;
    this.password=password;
    // Call the authenticate method with user input
    this.users.authenticate(this.id, this.password).subscribe(
      (user) => {
        
        // Authentication successful, you can handle it here
       // console.log('Authentication successful');
       this.router.navigate(['/homepage']);
      },
      (error) => {
        console.error('Authentication failed', error);

      // You might want to show a user-friendly error message here
      alert('Authentication failed. Please check your ID and password.');
      }
    );
}
}







