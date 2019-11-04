import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL: string = environment.APIEndpoint;

  constructor(private httpClient: HttpClient) { }

  public getToken(): string | null {
    return localStorage.getItem("token")
  }

  public setToken(token): void {
    localStorage.setItem('token', token)
  }

  public isAuth(): boolean {
    return this.getToken() ? true : false;
  }

  signIn(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.BASE_URL}/user/login/`, user);
  }
}
