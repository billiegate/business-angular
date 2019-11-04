import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  BASE_URL: string = environment.APIEndpoint;

  constructor(private httpClient: HttpClient) { }

  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.BASE_URL}/user`, user);
  }
}
