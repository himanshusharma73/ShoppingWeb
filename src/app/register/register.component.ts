import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userService:UsersService,private router: Router){}
  addUser(data:any){
    this.userService.addusers(data).subscribe((result)=>{console.log(result)});
    alert('User added successfully');
    this.router.navigate(['/homepage']);
  }

}
