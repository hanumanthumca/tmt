import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from '../header/header';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
  quantity: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, TableModule, CardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 199.99,
      status: 'In Stock',
      quantity: 25
    },
    {
      id: 2,
      name: 'Gaming Mouse',
      category: 'Electronics',
      price: 79.99,
      status: 'In Stock',
      quantity: 45
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      category: 'Electronics',
      price: 149.99,
      status: 'Low Stock',
      quantity: 8
    },
    {
      id: 4,
      name: 'Office Chair',
      category: 'Furniture',
      price: 299.99,
      status: 'In Stock',
      quantity: 12
    },
    {
      id: 5,
      name: 'Coffee Maker',
      category: 'Appliances',
      price: 89.99,
      status: 'Out of Stock',
      quantity: 0
    },
    {
      id: 6,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 349.99,
      status: 'In Stock',
      quantity: 18
    },
    {
      id: 7,
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      price: 129.99,
      status: 'In Stock',
      quantity: 32
    },
    {
      id: 8,
      name: 'Laptop Stand',
      category: 'Accessories',
      price: 49.99,
      status: 'In Stock',
      quantity: 67
    }
  ];

  // Global filter for search functionality
  onGlobalFilter(event: Event) {
    const target = event.target as HTMLInputElement;
    // Note: In a real implementation, you'd use Table's filter method
    console.log('Global filter:', target.value);
  }

  // Get status styling classes
  getStatusClass(status: string): string {
    switch (status) {
      case 'In Stock':
        return 'text-green-700 bg-green-100';
      case 'Low Stock':
        return 'text-yellow-700 bg-yellow-100';
      case 'Out of Stock':
        return 'text-red-700 bg-red-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  }

  // Get quantity styling classes
  getQuantityClass(quantity: number): string {
    if (quantity === 0) return 'text-red-600';
    if (quantity <= 10) return 'text-yellow-600';
    return 'text-green-600';
  }

  // Summary methods
  getTotalProducts(): number {
    return this.products.length;
  }

  getInStockProducts(): number {
    return this.products.filter(p => p.status === 'In Stock').length;
  }

  getOutOfStockProducts(): number {
    return this.products.filter(p => p.status === 'Out of Stock').length;
  }
}
