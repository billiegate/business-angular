import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';
import { Router } from '@angular/router';
import { User } from '../../../model/User';
import { Auth } from '../../../model/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, public auth: Auth, private router: Router) { }

  isLoading: boolean;

  signIn() {
    if (!this.validateSignInDetails()) {
      return false;
    }
    this.isLoading = true;
    this.loginService.signIn(this.auth.user).subscribe((user: User) => {
      this.auth.user = {...this.auth.user, ...user};
      this.isLoading = false;
      if(this.auth.user.key) {
        localStorage.setItem('token', this.auth.user.key)
        this.router.navigate(['/']);
      }
    }, error => {
      this.isLoading = false;
      this.auth.handleError(error);
    });
  }

  validateSignInDetails() {
    let isValid = true;
    this.auth.errors.username = (!this.auth.user.username) ? 'username is required' : null;
    this.auth.errors.password = (!this.auth.user.password) ? 'password is required' : null;
    this.auth.errors.password = (this.auth.user.password && this.auth.user.password.length < 8) ?
    'more than 8 characters is required' : this.auth.errors.password;
    for (const f in this.auth.errors) {
      if (this.auth.errors[f] !== null) {
        isValid = false;
      }
    }
    return isValid;
  }

  ngOnInit() {
  }

}
