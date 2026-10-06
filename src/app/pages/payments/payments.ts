import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.html',
  styles: [`
    .summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; }
    .summary-card { padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-color); }
    .summary-card.paid { background: #ECFDF5; border-color: #A7F3D0; }
    .summary-card.pending { background: #FFFBEB; border-color: #FDE68A; }
    .summary-card.trans { background: white; }
    .summary-card p { margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--text-muted); }
    .summary-card h2 { margin: 0; font-size: 2rem; color: var(--text-dark); }
    .summary-card.paid h2 { color: var(--status-completed); }
    .summary-card.pending h2 { color: var(--status-warning); }
    
    .section-title { font-size: 1.1rem; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; }
    .payment-methods { display: flex; gap: 1rem; margin-bottom: 2rem; }
    .method-card { background: white; border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; flex: 1; display: flex; align-items: center; justify-content: space-between; }
    .method-info { display: flex; gap: 1rem; align-items: center; }
    .method-icon { background: var(--bg-main); padding: 0.5rem; border-radius: 6px; }
    .badge-default { background: var(--primary-teal); color: white; padding: 0.2rem 0.5rem; border-radius: 12px; font-size: 0.7rem; }
    
    .history-card { background: white; border-radius: 12px; border: 1px solid var(--border-color); padding: 1rem; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; }
    .history-card .details { display: flex; gap: 1rem; align-items: center; }
    .history-card .amount { text-align: right; display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-end; }
    .history-card h4 { margin: 0 0 0.25rem 0; font-size: 1rem; }
    .history-card p { margin: 0; font-size: 0.875rem; color: var(--text-muted); }
    .status-badge { padding: 0.2rem 0.5rem; border-radius: 12px; font-size: 0.75rem; }
    .status-badge.pending { background: #FEF3C7; color: #D97706; }
    .status-badge.paid { background: #ECFDF5; color: var(--status-completed); }
    .status-badge.refunded { background: #F3E8FF; color: #9333EA; }
    .btn-pay { background: var(--primary-teal); color: white; border: none; padding: 0.4rem 1rem; border-radius: 6px; cursor: pointer; }
  `]
})
export class PaymentsComponent {
  transactions = [
    { doctor: 'Dr. Arjun Nair', desc: 'Consultation · Awaiting payment', date: '14 Aug 2026', amount: '₹800', status: 'Pending' },
    { doctor: 'Dr. Arjun Nair', desc: 'Consultation · UPI', date: '28 Jun 2025', amount: '₹800', status: 'Paid' },
    { doctor: 'Dr. Rajan Krishnan', desc: 'Consultation · Credit Card', date: '12 May 2025', amount: '₹900', status: 'Paid' },
    { doctor: 'Dr. Arjun Nair', desc: 'Cancellation Refund · Original Method', date: '3 Apr 2025', amount: '+₹800', status: 'Refunded' }
  ];
}