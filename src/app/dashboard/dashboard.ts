import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from '../components/auth-button/auth-button';
import { UserService } from '../services/User/user';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, AuthButtonComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true,
})
export class Dashboard {
    constructor(public auth: AuthService, private userService: UserService) {}

    fetchUsers() {
    this.userService.getUserbyId().subscribe(data => {
      console.log('User:', data);
    });
  }
}
