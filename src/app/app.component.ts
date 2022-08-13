import { Component } from '@angular/core';
import { UserServise } from './servise/user.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserServise]
})
export class AppComponent {
  title = 'subex';
}
