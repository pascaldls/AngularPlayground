import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' ;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup ;
  constructor ( private formBuilder: FormBuilder ) {
    this.reactiveForm = formBuilder.group({
      email : [ null, Validators.compose([
          Validators.required,
          Validators.minLength( 2 )
      ]) ] ,
      password : [ null ] ,
      privacyAndPolicy  : [ false ] ,
    }) ;
  }

  ngOnInit() {
    this.reactiveForm.get( 'password').valueChanges.subscribe(function( value ) {
      console.log ( value ) ;
    });
  }

  submitHandler( value ) {
    console.log( value ) ;
  }

}
