import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' ;

@Injectable()
export class TodoService {

  constructor( public _http: HttpClient) { }

  getTodos() {
    return this._http.
            get( 'api/todo' )
            .map( res => ( res as Response ) ) ;
  }

  saveTodo( todo ) {
    const headers = new HttpHeaders() ;
    headers.append( 'Content-Type', 'application/json') ;
    return this._http.post (
      '/api/todo' ,
      JSON.stringify( todo ),
      { headers: headers } )
      .map( res => ( res as Response ) ) ;
  }

}
