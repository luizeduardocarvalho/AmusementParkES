import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from './customer';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customerUrl + 'api/customers').pipe(
      tap(data => console.log('ALl: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.customerUrl + 'api/customer', customer).pipe(
      tap(data => console.log('ALl: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage)
  }
}
