import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Parties } from '../both/collections/parties/parties.collection';
import { PartiesFormComponent }  from './imports/parties/parties-form.component';
import { Mongo } from 'meteor/mongo';
 
import template from './app.component.html';
 
@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {}