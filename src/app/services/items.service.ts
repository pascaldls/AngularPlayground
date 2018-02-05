import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class ItemsService {

  itemList: object[] = [
    { name : 'toto' },
    { name : 'lala' },
    { name : 'mango' },

  ] ;

  constructor( private auth: AuthService ) { }

  getList() {
    return this.auth.isAuthorised() ? this.itemList  : []  ;
  }
}
