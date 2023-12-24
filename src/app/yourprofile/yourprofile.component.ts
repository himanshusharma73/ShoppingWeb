import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourprofile',
  templateUrl: './yourprofile.component.html',
  styleUrls: ['./yourprofile.component.scss']
})
export class YourprofileComponent {

    constructor(private userSerive:UsersService, private router: Router){}
    user:any
    ngOnInit(){
      this.userSerive.getUserInfo().subscribe((data:any)=>{
      this.user=data});
    }
    deleteProfile(userId:number) {
      this.userSerive.deleteUser(userId).subscribe(
        () => {
          // Deletion successful
          alert('User deletion successful');
          this.router.navigate(['/login']);
        },
        (error) => {
          // Handle error if the deletion fails
          console.error('Error deleting user:', error);
    
          // Show a more detailed error message
          alert(`User deletion failed. Check the console for more details.`);
        }
      );
    }
}
