import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private router: Router) {}

  // Quand l'utilisateur choisit une offre, on le redirige vers la page de formulaire
  // de paiement, sans effectuer de vrai paiement.
  choosePlan(plan: 'ONE_MONTH' | 'SIX_MONTHS' | 'ONE_YEAR'): void {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    this.router.navigate(['/payment', plan]);
  }
}
