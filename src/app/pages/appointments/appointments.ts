import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.css']
})
export class AppointmentsComponent {
  currentDate = new Date('2026-08-02T00:00:00');
  activeFilter = 'All';

  appointments = [
    { id: 1, doctor: 'Dr. Arjun Nair', initials: 'AN', status: 'Completed', specialty: 'Cardiology · Follow-up', date: '28 Jun 2025', time: '10:30 AM', location: 'MediCare Main Hospital', price: '₹800', note: 'Blood pressure normal. Continue medication.' },
    { id: 2, doctor: 'Dr. Sunita Reddy', initials: 'SR', status: 'Upcoming', specialty: 'Dermatology · Consultation', date: '20 Jul 2025', time: '02:00 PM', location: 'MediCare Skin Clinic', price: '₹600', note: null },
    { id: 3, doctor: 'Dr. Rajan Krishnan', initials: 'RK', status: 'Completed', specialty: 'Orthopedics · Check-up', date: '12 May 2025', time: '11:00 AM', location: 'MediCare Orthopedic Wing', price: '₹900', note: 'Knee pain resolved. Physiotherapy recommended.' },
    { id: 4, doctor: 'Dr. Kavitha Sharma', initials: 'KS', status: 'Upcoming', specialty: 'Neurology · Consultation', date: '28 Jul 2025', time: '09:00 AM', location: 'MediCare Neuro Centre', price: '₹1200', note: null },
    { id: 5, doctor: 'Dr. Arjun Nair', initials: 'AN', status: 'Cancelled', specialty: 'Cardiology · Routine', date: '3 Apr 2025', time: '10:30 AM', location: 'MediCare Main Hospital', price: '₹800', note: 'Patient cancelled — schedule conflict.' }
  ];

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  get filteredAppointments() {
    if (this.activeFilter === 'All') return this.appointments;
    return this.appointments.filter(a => a.status === this.activeFilter);
  }

  getCount(status: string) {
    if (status === 'All') return this.appointments.length;
    return this.appointments.filter(a => a.status === status).length;
  }
}