import { Component } from '@angular/core';
import { Parties } from '../both/collections/parties/parties.collection';
import { PartiesFormComponent }  from './imports/parties/parties-form.component';
import { Mongo } from 'meteor/mongo';
 
import template from './app.component.html';
 
@Component({
  selector: 'app',
  template,
  directives: [PartiesFormComponent]
})

export class AppComponent {
  parties: Mongo.Cursor<any>;
 
  constructor() {
    this.parties = Parties.find();
  }
}