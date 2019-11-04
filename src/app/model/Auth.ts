import { User } from './User';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class Auth {
    isValidAuth: boolean;
    errors: any = {
        username: null,
    };
    user: User = {
    };
    public handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          this.errors.message = error.error.message;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
            this.errors.status = error.status;
            this.errors = error.error;
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
}
