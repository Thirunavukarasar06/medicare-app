import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data'; // Import the service
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'] // assuming you have your css here
})
export class DashboardComponent implements OnInit {
  // Add the Observable to hold user data
  currentUser$: Observable<any> | undefined;

  currentDate = new Date('2026-08-02T00:00:00');

  upcomingAppointments = [
    { doctor: 'Dr. Sunita Reddy', specialty: 'Dermatology · Consultation', date: '20 Jul 2025 at 02:00 PM' },
    { doctor: 'Dr. Kavitha Sharma', specialty: 'Neurology · Consultation', date: '28 Jul 2025 at 09:00 AM' }
  ];

  activeReminders = [
    { title: 'Follow-up with Dr. Arjun Nair', desc: 'Cardiology follow-up due. BP monitoring and ECG recommended.', overdue: '28 Jul 2025' },
    { title: 'Amlodipine Prescription Refill', desc: 'Current supply runs out in 7 days. Contact pharmacy or request...', overdue: '21 Jul 2025' }
  ];

  // Inject the DataService
  constructor(private dataService: DataService) {}

  // Subscribe to the current user on initialization
  ngOnInit() {
    this.currentUser$ = this.dataService.currentUser$;
  }
}