import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { Product } from '../products-details/productdetails.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userInfo:any;
  
  constructor(private http: HttpClient) {}

  authenticate(id: number, password: string) {
    // Define the authentication request body
    const authData = {
      id: id,
      password: password,
    };

    return this.http.post('http://localhost:8081/users/pass', authData).pipe
    (tap((user)=>{
      this.userInfo=user;
    }));
  }

  getUserInfo(): Observable<any> {
    // Check if userInfo is already fetched

      // If userInfo is available, return it as an observable
      return new Observable(observer => {
        observer.next(this.userInfo);
        observer.complete();
      });
    // } else {
    //   // If userInfo is not available, fetch it from the server
    //  // return this.http.get('http://localhost:8081/users');
    // }
}

addusers(data:any){
  return this.http.post('http://localhost:8081/users',data);
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

getProducts(): Observable<Product[]> {
  return this.http.get<any>('http://localhost:8081/products').pipe(
    map((response: any) => response.data?.productList || []),
    catchError((error: any) => {
      console.error('Error fetching products', error);
      return throwError('An error occurred while fetching products.');
    })
  );
}

addToCart(userId: number, productId: number) {
  return this.http.post(`http://localhost:8081/addtocart/${userId}/product/${productId}`,{});
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

