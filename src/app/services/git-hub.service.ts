import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import 'rxjs/add/operator/map' ;

@Injectable()
export class GitHubService {
  private username ; // Github username
  constructor( private _http: HttpClient ) {
  }

  getUser() {
    return this._http.
            get( 'https://api.github.com/users/' + this.username )
            .map( res => res ) ;
  }

  getRepos() {
    return this._http.
            get( 'https://api.github.com/users/' + this.username + '/repos' )
            .map( res => res ) ;
  }
  updateUserName( username ) {
    this.username = username ;
  }
}
