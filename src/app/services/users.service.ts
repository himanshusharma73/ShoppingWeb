import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { Product } from '../products-details/productdetails.model';
import {AuthService} from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userInfo:any;
  
  constructor(private http: HttpClient,private authService: AuthService ) {}

  getUserInfo(): Observable<any> {
    const userInfo = this.authService.getUserInfo();
    this.userInfo = userInfo;
    return of(userInfo);
  }

updateProfile(id:number,data:any): Observable<any> {
  return this.http.put(`http://localhost:8081/users/${id}`, data)
    .pipe(
      catchError((error: any) => {
        console.error('HTTP error:', error);
        return throwError('An error occurred while making the HTTP request.');
      })
    );
}

// getProducts(): Observable<Product[]> {
//   return this.http.get<any>('http://localhost:8081/products').pipe(
//     map((response: any) => response.data?.productList || []),
//     catchError((error: any) => {
//       console.error('Error fetching products', error);
//       return throwError('An error occurred while fetching products.');
//     })
//   );
// }

getProducts(): Observable<Product[]> {

   const token = this.authService.getToken();
    
   const headers = new HttpHeaders({
     'Authorization': `Bearer ${token}`
   });
  console.log(token);
  return this.http.get<any>('http://localhost:8081/products', { headers }).pipe(
    map((response: any) => response.data?.productList || []),
    catchError((error: any) => {
      console.error('Error fetching products', error);
      return throwError('An error occurred while fetching products.');
    })
  );
}


addToCart(userId: number, productId: number,quantity:number) {
  console.log('data',quantity);
  return this.http.post(`http://localhost:8081/addtocart/${userId}/product/${productId}`,{quantity});
}

getCart(userId:number): Observable<any> {
  return this.http.get<any>(`http://localhost:8081/users/${userId}/cart`);
}

deleteUser(userId:number){
  return this.http.delete(`http://localhost:8081/users/${userId}`)
}

isProductInCart(userId: number, productId: number): Observable<boolean> {
  return this.http.get<boolean>(`http://localhost:8081/users/${userId}/cart/product/${productId}`);
}


removeFromCart(userId: number, productId: number){
  return this.http.delete(`http://localhost:8081/users/${userId}/cart/product/${productId}`);
}

}

