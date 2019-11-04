import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/service/login.service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService, private router: Router){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(this.loginService.isAuth()) {
            let token = this.loginService.getToken();
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        } else {
            //this.router.navigate(['/login'])
        }

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if(event instanceof HttpResponse) {

                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if ( error.status === 401 ) {
                    this.router.navigate(['/login'])
                }
                return throwError(error);
            })
        )
    }
}

