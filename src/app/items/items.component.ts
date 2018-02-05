import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  itemsList: object [  ] ;
  constructor( private itemsService: ItemsService ) {

  }

  ngOnInit () {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.itemsList = this.itemsService.getList() ;
    console.log( this.itemsList ) ;
  }

}
