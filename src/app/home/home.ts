import { Component } from '@angular/core';
import { AuthButtonComponent } from '../components/auth-button/auth-button';
@Component({
  selector: 'app-home',
  imports: [AuthButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
