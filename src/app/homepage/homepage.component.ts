import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  user: any;
  isMenuOpen = false;
  constructor(private userService: UsersService) {}

  ngOnInit() {
    // Retrieve user information from your service (replace with actual API call)
    this.userService.getUserInfo().subscribe((users: any) => {
      this.user = users;
    });
}


  toggleMenu() {
    console.log("working");
    this.isMenuOpen = !this.isMenuOpen;
  }
}


