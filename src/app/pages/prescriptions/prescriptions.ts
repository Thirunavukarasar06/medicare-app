import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prescriptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prescriptions.html',
  styles: [`
    .presc-card { background: white; padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 1.5rem; }
    .card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
    .doc-info { display: flex; gap: 1rem; }
    .icon-doc { width: 40px; height: 40px; background: #F3E8FF; color: #9333EA; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .doc-info h3 { margin: 0 0 0.25rem 0; font-size: 1.2rem; }
    .doc-info p { margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--text-muted); }
    .pills-container { display: flex; gap: 0.5rem; margin-top: 1rem; }
    .pill { background: #F8FAFC; border: 1px solid var(--border-color); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.75rem; color: #9333EA; font-weight: 500; }
    .actions { display: flex; flex-direction: column; gap: 0.5rem; }
    .btn-outline { background: white; border: 1px solid var(--border-color); padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; font-size: 0.75rem; }
    .btn-outline:hover { background: var(--bg-main); }
    .card-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border-color); margin-top: 1.5rem; }
    .follow-up { color: #D97706; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; }
    .btn-sm-primary { background: #EA580C; color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; font-size: 0.875rem; }
  `]
})
export class PrescriptionsComponent {
  prescriptions = [
    { title: 'Hypertension — Stage 1', doctor: 'Dr. Arjun Nair · Cardiology', date: '28 Jun 2025', meds: ['Amlodipine 5mg', 'Atenolol 50mg', 'Aspirin 75mg'], followUp: '28 Jul 2025' },
    { title: 'Patellofemoral Pain Syndrome (Left Knee)', doctor: 'Dr. Rajan Krishnan · Orthopedics', date: '12 May 2025', meds: ['Diclofenac 50mg', 'Pantoprazole 40mg'], followUp: '12 Jun 2025' }
  ];
}