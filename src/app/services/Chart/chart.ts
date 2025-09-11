import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor() {}

  getDailyOrders(): Observable<any> {
    
    // Mock API response
    const mockData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      orders: [12, 19, 8, 15, 22, 30, 25],
      revenue: [1200, 1900, 800, 1500, 2200, 3000, 2500]
    };
    return of(mockData); // simulate API fetch
  }
}
