import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Product } from './productdetails.model';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
  
})
export class ProductsDetailsComponent {

  products: Product[] = [];

  constructor(private userData:UsersService) { }

  ngOnInit() {
   this.productDetails();
  }

  productDetails(){
    this.userData.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  addToCart(product: Product) {
    let userId: number = 0;
  
    this.userData.getUserInfo().subscribe(
      (userInfo) => {
        userId = userInfo.id;
  
        this.userData.isProductInCart(userId, product.id).subscribe(
          (isInCart) => {
            if (isInCart) {
              alert('Product is already in your cart.');
            } else {
              this.userData.addToCart(userId, product.id).subscribe(
                () => {
                  alert('Product added to cart successfully!');
                },
                (error) => {
                  console.error('Error adding product to cart', error);
                  alert('Failed to add product to cart.');
                }
              );
            }
          },
          (error) => {
            console.error('Error checking if product is in cart', error);
            alert('Failed to check if the product is in the cart.');
          }
        );
      },
      (error) => {
        console.error('Error fetching user info', error);
        alert('Failed to fetch user info.');
      }
    );
  }

  
}
