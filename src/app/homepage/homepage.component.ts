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
  itemCount = 0; 
  constructor(private userService: UsersService) {}

  ngOnInit() {
  this.userDetails();
    
}
userDetails(){
  this.userService.getUserInfo().subscribe((users: any) => {
    this.user = users;
    this.cartDetails();
  });
}
cartDetails() {
  this.userService.getCart(this.user.id).subscribe(
    (response: any) => {
        this.itemCount = response.data.productLists.length;   
    }
  );
}

  toggleMenu() {
    console.log("working");
    this.isMenuOpen = !this.isMenuOpen;
  }
}


