import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent {

  cartData: any={}
  constructor(private cartService:UsersService){}
  userId: number = 0;


  ngOnInit() {
    this.cartDetails();
  }

  cartDetails() {
    this.cartService.getUserInfo().subscribe(
      (userInfo: { id: number }) => {
        this.userId = userInfo.id;
        this.cartService.getCart(this.userId).subscribe(
          (data: any) => {
            this.cartData = data.data;
          },
          (error) => {
            console.error('Error fetching cart data', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching user information', error);
      }
    );
  }

  removeProduct(productId: number) {
    this.cartService.removeFromCart(this.userId, productId).subscribe(
      (response) => {
        alert("Product removed from the cart successfully");
        this.cartDetails();
      },
      (error) => {
        console.error('Error removing product from cart', error);
      }
    );
  }

}
