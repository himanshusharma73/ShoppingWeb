import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Product } from './productdetails.model';
import { HomepageComponent} from '../homepage/homepage.component';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
  
})
export class ProductsDetailsComponent {
  products: Product[] = [];
  userId: number = 0;
  constructor(private userData:UsersService,private homepageComponent: HomepageComponent) { }

  

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
    const enteredQuantity = window.prompt('Enter quantity (1 or more):', '1');
    
    if (enteredQuantity !== null) {
      const quantity = parseInt(enteredQuantity, 10);
  
      if (!isNaN(quantity) && quantity >= 1) {
        this.userData.getUserInfo().subscribe(
          (userInfo) => {
            this.userId = userInfo.id;
  
            this.userData.isProductInCart(this.userId, product.id).subscribe(
              (isInCart) => {
                if (isInCart) {
                  alert('Product is already in your cart.');
                } else {
                  this.userData.addToCart(this.userId, product.id, quantity).subscribe(
                    () => {
                      alert('Product added to cart successfully!');
                      this.homepageComponent.itemCount++;
                      this.homepageComponent.cartDetails();
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
      } else {
        alert('Invalid quantity. Please enter a number greater than or equal to 1.');
      }
    } else {
      alert('Quantity entry canceled. Please enter a valid quantity.');
    }
  }
  
}
