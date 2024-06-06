import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  blog = [
    {
      name: 'ACFE OMAN Imbizo 2024 - Official Sponsor Opportunities',
      src: 'assets/images/news-1.png',
      day: '05',
      month: 'MAY',
      year: '2024',
    },
    {
      name: '2023 International Fraud Awareness Week',
      src: 'assets/images/news-2.png',
      day: '27',
      month: 'JAN',
      year: '2024',
    },
    {
      name: 'The Corporate Report: Facilitating Business in Oman',
      src: 'assets/images/news-3.png',
      day: '15',
      month: 'OCT',
      year: '2023',
    },
    {
      name: '419 Scams: What are They, and How Can We Avoid Them?',
      src: 'assets/images/news-4.png',
      day: '01',
      month: 'AUG',
      year: '2023',
    },
  ];
}
