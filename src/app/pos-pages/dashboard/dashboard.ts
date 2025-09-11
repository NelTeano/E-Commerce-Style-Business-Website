import { Component } from '@angular/core';
import { Cards } from '../../components/dashboard-components/cards/cards';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';
import { ChartService } from '../../services/Chart/chart';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  imports: [Cards, CommonModule, TableModule, TagModule, ChartModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})

export class Dashboard implements OnInit {

  getSeverity(status: string): string {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'warn';
      case 'Cancelled':
        return 'danger';
      default:
        return 'info';
    }
  }

  recentActivity = [
    {
      id: 1,
      customer_name: "Giovanni Rossi",
      total: 3.50,
      product_qty: 1,
      status: "Completed",
    },
    {
      id: 2,
      customer_name: "Maria Bianchi",
      total: 9.50,
      product_qty: 2,
      status: "Pending",
    },
    {
      id: 3,
      customer_name: "Luca Verdi",
      total: 7.50,
      product_qty: 3,
      status: "Completed",
    },
    {
      id: 4,
      customer_name: "Sofia Neri",
      total: 4.50,
      product_qty: 1,
      status: "Cancelled",
    },
    {
      id: 5,
      customer_name: "Marco Russo",
      total: 4.20,
      product_qty: 1,
      status: "Completed",
    },
    {
      id: 6,
      customer_name: "Elena Gallo",
      total: 10.00,
      product_qty: 2,
      status: "Completed",
    },
  ];

  // CHARTS CONFIG
  revenueData: any;
  options: any;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.loadChart();
    this.setupOptions();
  }

  loadChart(): void {
    this.chartService.getDailyOrders().subscribe({
      next: (res) => {
        this.revenueData = {
          labels: res.labels,
          datasets: [
            {
              label: 'Orders',
              data: res.orders,
              backgroundColor: '#933C24',
              yAxisID: 'y',
            },
            {
              label: 'Revenue (₱)',
              data: res.revenue,
              backgroundColor: '#E9BD8C',
              yAxisID: 'y1',
            }
          ]
        };
      },
      error: (err) => {
        console.error('Error fetching chart data', err);
      }
    });
  }

  setupOptions(): void {
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: 'Daily Orders & Revenue'
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Days' }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Orders' }
        },
        y1: {
          beginAtZero: true,
          position: 'right',
          title: { display: true, text: 'Revenue (₱)' },
          grid: { drawOnChartArea: false }
        }
      }
    };
  }
  
}
