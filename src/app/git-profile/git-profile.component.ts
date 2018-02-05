import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map' ;
import { GitHubService } from '../services/git-hub.service';
import { Timeouts } from 'selenium-webdriver';

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {

  public user  ;
  public username: String ;
  public repos: object ;
  private timeOut ;

  constructor( private _gitHubService: GitHubService) {
    this.user = false ;
  }

  ngOnInit() {
  }

  searchUser() {

    console.log( this.username ) ;
    clearTimeout( this.timeOut ) ;
    this.timeOut = setTimeout( function( me ) {
      me._gitHubService.updateUserName( me.username ) ;
      me._gitHubService.getUser().subscribe( user => {
        console.log( user ) ;
        me.user = user ;
      }) ;
      me._gitHubService.getRepos().subscribe( repos => {
        console.log( repos ) ;
        me.repos = repos ;
      }) ;
    }, 200, this ) ;
  }

}
