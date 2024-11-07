import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  get<T>(url: string, showError: boolean = true): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}${url}`, { headers: this.addHeaders() })
      .pipe(catchError((error) => this.handleError<T>(url, error, showError)));
  }

  post<T>(url: string, data: any, showError: boolean = true): Observable<T> {
    return this.http
      .post<T>(`${this.baseUrl}${url}`, data, { headers: this.addHeaders() })
      .pipe(catchError((error) => this.handleError<T>(url, error, showError)));
  }

  put<T>(url: string, data: any, showError: boolean = true): Observable<T> {
    return this.http
      .put<T>(`${this.baseUrl}${url}`, data, { headers: this.addHeaders() })
      .pipe(catchError((error) => this.handleError<T>(url, error, showError)));
  }

  delete<T>(url: string, showError: boolean = true): Observable<T> {
    return this.http
      .delete<T>(`${this.baseUrl}${url}`, { headers: this.addHeaders() })
      .pipe(catchError((error) => this.handleError<T>(url, error, showError)));
  }

  private addHeaders(): HttpHeaders {
    const systemKey = '"nnnn"';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'System-Key': systemKey
    });
  }


  private handleError<T>(url: string, error: HttpErrorResponse, showError: boolean): Observable<T> {
    if (showError) {
      console.error(`Error occurred at ${url}: ${error.message}`);
      console.log('Full error details:', error);
    }
    return throwError(() => new Error(error.message)) as Observable<T>;
  }
}
