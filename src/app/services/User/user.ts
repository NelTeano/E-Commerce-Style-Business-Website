import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getUserbyId(): Observable<any> {
    return this.auth.getAccessTokenSilently().pipe(
      switchMap(token => {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        console.log('Token:', token);
        console.log('Headers:', headers);
        return this.http.get('https://localhost:7251/api/User/666CA127-0951-4400-8A99-61F749E1E82E', { headers });
      })
    );
  }
}
