import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  user: any;
  isProductOpen =true;
  itemCount = 0; 
  isCartOpen=false;
  activeComponent: string = 'notifications';

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
      this.itemCount = response?.data?.productLists?.length ?? 0;
    },
    (error) => {
      console.error('Error fetching cart details:', error);
      this.itemCount = 0;
    }
  );
}

  toggleMenu() {
    this.isProductOpen =true;
    this.isCartOpen=false;
    console.log(this.isProductOpen)
  }

  toggleMenu1(){
    this.isCartOpen=true;
    this.isProductOpen=false
  }  
  
  setActiveComponent(component: string): void {
    this.activeComponent = component;
  }
}


