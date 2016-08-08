import { Component } from '@angular/core';
import { Parties } from '../both/collections/parties/parties.collection';
import { PartiesFormComponent }  from './imports/parties/parties-form.component';
import { Mongo } from 'meteor/mongo';
 
import template from './app.component.html';
 
@Component({
  selector: 'app',
  template
})

export class AppComponent {}