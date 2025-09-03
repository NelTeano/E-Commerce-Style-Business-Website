import { Component } from '@angular/core';
import { Cards } from '../../components/dashboard-components/cards/cards';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [Cards, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
