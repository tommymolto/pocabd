import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
user = {
    name: 'Jane Doe',
    account: '123456-7',
    cardNumber: '1234 5678 9012 3456',
    expenses: 2450.75
  };

  transactions = [
    { type: 'income', description: 'Salary', amount: 3500, date: '2025-07-01' },
    { type: 'expense', description: 'Groceries', amount: 150, date: '2025-07-03' },
    { type: 'expense', description: 'Electricity Bill', amount: 120, date: '2025-07-05' },
    { type: 'income', description: 'Freelance', amount: 800, date: '2025-07-06' },
    { type: 'expense', description: 'Gym', amount: 60, date: '2025-07-07' }
  ];
}
