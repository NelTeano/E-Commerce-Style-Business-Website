import { Component } from '@angular/core';
import { AuthButtonComponent } from '../auth-button/auth-button';

@Component({
  selector: 'app-navbar',
  imports: [AuthButtonComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true
})
export class Navbar {

}
