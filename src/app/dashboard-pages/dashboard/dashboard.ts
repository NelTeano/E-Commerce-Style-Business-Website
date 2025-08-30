import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from '../../components/auth-button/auth-button';
import { UserService } from '../../services/User/user';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { Navbar } from '../../components/dashboard-components/navbar/navbar';
import { Cards } from '../../components/dashboard-components/cards/cards';
import { SelectModule } from 'primeng/select';
import { ChartModule } from 'primeng/chart';
import { TransactionCard } from '../../components/dashboard-components/transaction-card/transaction-card';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    AuthButtonComponent,
    Navbar,
    Cards,
    SelectModule,
    FormsModule,
    ChartModule,
    TransactionCard
],
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



  yearSelections = [
    { name: '2020', value: 2020 },
    { name: '2021', value: 2021 },
    { name: '2022', value: 2022 },
    { name: '2023', value: 2023 },
    { name: '2024', value: 2024 }
  ];
  selectedYear: number | null = null;

  onYearChange(event: any) {
    this.selectedYear = event.value;
  }

  revenueData = {
    labels: ['Bread', 'Cake', 'Pastry', 'Cookie', 'Pie'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF7043'],
        data: [120, 90, 60, 80, 70]
      }
    ]
  };

  options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'Bakery Product Sales'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Product'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Units Sold'
        },
        beginAtZero: true
      }
    }
  };

}
