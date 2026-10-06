import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1 class="serif-heading">Find Doctors</h1>
      </header>

      <div class="search-bar">
        <input type="text" placeholder="Search doctors or specialty...">
      </div>

      <div class="doctors-grid">
        <div class="doc-card" *ngFor="let doc of doctors">
          <div class="doc-top">
            <div class="avatar-medium">{{ doc.initials }}</div>
            <div class="doc-info">
              <h4>{{ doc.name }}</h4>
              <p class="spec">{{ doc.specialty }}</p>
              <p class="exp">{{ doc.exp }} yrs experience · {{ doc.hospital }}</p>
            </div>
            <div class="rating">⭐ {{ doc.rating }}</div>
          </div>
          
          <div class="doc-bottom">
            <div>
              <p class="label">Next available</p>
              <p class="value available">{{ doc.nextAvailable }}</p>
            </div>
            <div class="fee-box">
              <p class="label">Consultation fee</p>
              <p class="value">{{ doc.fee }}</p>
            </div>
          </div>
          
          <button class="btn-primary" [disabled]="!doc.isAvailable">
            {{ doc.isAvailable ? 'Book Appointment' : 'Not Available Today' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .search-bar input { width: 100%; padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 2rem; }
    .doctors-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .doc-card { background: white; padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 1.5rem; }
    .doc-top { display: flex; gap: 1rem; align-items: flex-start; }
    .doc-info h4 { margin: 0; font-size: 1.1rem; }
    .spec { margin: 0; font-size: 0.875rem; color: var(--primary-teal); }
    .exp { margin: 0; font-size: 0.75rem; color: var(--text-muted); }
    .rating { margin-left: auto; font-size: 0.875rem; font-weight: 600; }
    .doc-bottom { display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem; }
    .label { margin: 0; font-size: 0.75rem; color: var(--text-muted); }
    .value { margin: 0; font-weight: 600; font-size: 0.875rem; }
    .value.available { color: var(--status-completed); }
    .fee-box { text-align: right; }
  `]
})
export class DoctorsComponent {
  doctors = [
    { name: 'Dr. Arjun Nair', initials: 'AN', specialty: 'Cardiology', exp: 18, hospital: 'MediCare Main Hospital', rating: '4.9', nextAvailable: 'Today, 3:00 PM', fee: '₹800', isAvailable: true },
    { name: 'Dr. Rajan Krishnan', initials: 'RK', specialty: 'Orthopedics', exp: 22, hospital: 'MediCare Orthopedic Wing', rating: '4.7', nextAvailable: 'Tomorrow, 10:00 AM', fee: '₹900', isAvailable: false }
  ];
}