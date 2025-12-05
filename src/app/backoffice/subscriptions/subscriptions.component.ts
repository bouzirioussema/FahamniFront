import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface SubscriptionDetail {
  paymentId: number;
  username: string;
  email: string;
  plan: string;
  amountLabel: string;
  createdAt: string;
}

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: SubscriptionDetail[] = [];
  filteredSubscriptions: SubscriptionDetail[] = [];
  loading = false;
  error = '';

  searchTerm = '';
  selectedPlan: string = 'ALL';

  private apiUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadSubscriptions();
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  loadSubscriptions(): void {
    this.loading = true;
    this.error = '';

    this.http.get<SubscriptionDetail[]>(`${this.apiUrl}/admin/subscriptions`, { headers: this.getHeaders() })
      .subscribe({
        next: (data) => {
          this.subscriptions = data;
          this.filterSubscriptions();
          this.loading = false;
        },
        error: () => {
          this.error = 'Failed to load subscriptions';
          this.loading = false;
        }
      });
  }

  onSearchChange(): void {
    this.filterSubscriptions();
  }

  onPlanFilterChange(): void {
    this.filterSubscriptions();
  }

  private filterSubscriptions(): void {
    const term = this.searchTerm.toLowerCase();

    this.filteredSubscriptions = this.subscriptions.filter(sub => {
      const matchesSearch = !term ||
        (sub.username && sub.username.toLowerCase().includes(term)) ||
        (sub.email && sub.email.toLowerCase().includes(term));

      const matchesPlan = this.selectedPlan === 'ALL' || sub.plan === this.selectedPlan;

      return matchesSearch && matchesPlan;
    });
  }

  getPlanLabel(plan: string | null | undefined): string {
    if (!plan) {
      return '—';
    }
    switch (plan) {
      case 'ONE_MONTH':
        return '1 mois';
      case 'SIX_MONTHS':
        return '6 mois';
      case 'ONE_YEAR':
        return '1 an';
      default:
        return plan;
    }
  }

  getPlanClass(plan: string | null | undefined): string {
    switch (plan) {
      case 'ONE_MONTH':
        return 'badge-plan-one-month';
      case 'SIX_MONTHS':
        return 'badge-plan-six-months';
      case 'ONE_YEAR':
        return 'badge-plan-one-year';
      default:
        return 'badge-plan-default';
    }
  }
}
