import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent {
  userid=0;

  constructor(private userService:UsersService, private router: Router){}
  ngOnInit() {
    // Retrieve user information from your service (replace with actual API call)
    this.userService.getUserInfo().subscribe(
      (user: any) => {
        this.userid = user.id;
      },
      (error) => {
        console.error('Error fetching user information', error);
      }
    );
  }


  updateProfile(userId:number,data:any) {
    this.userService.updateProfile(this.userid,data)
      .subscribe(
        result => {
          console.log('Profile update successful', result);
          alert('Profile update successful');
          this.router.navigate(['/homepage']);
         
        },
        error => {
          console.error('Profile update error', error);
          // Handle the error
        }
      );
  }
}
