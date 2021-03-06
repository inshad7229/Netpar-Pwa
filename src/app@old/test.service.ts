import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }


    onLogin (model): Observable<any> {
    return this.http.post<any>('http://52.15.178.19:3001/api/authenticate',JSON.stringify(model),httpOptions)
      // .pipe(
      //   tap(heroes => this.log(`fetched api`)),
      //   catchError(this.handleError('error in api', []))
      // );
  }
 
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
    private log(message: string) {
    console.log('HeroService: ' + message);
  }


}
