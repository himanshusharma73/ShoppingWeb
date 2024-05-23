import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl ="http://localhost:8081/auth"
  private token: string | null = null;

  private userInfo: any;

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user)
      .pipe(
        tap((response: any) => {
          this.token = response?.data?.user?.token;
          this.userInfo = response.data.user;
        })
      );
  }
  

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, user)
      .pipe(
        tap((response: any) => {
            this.token = response?.data?.user?.token;
            this.userInfo = response.data.user;            
        })
      );
  }

  getToken(): string | null {
    return this.token;
  }

getUserInfo() :any {
    return this.userInfo;
}

  logout(): void {
    this.token = null;
  }
}
