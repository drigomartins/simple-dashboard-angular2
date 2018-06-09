import { Component } from '@angular/core';
import { ConfigComponent } from './configuracoes/config.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  background = 'bg-dark';

  constructor(){

  }
}
