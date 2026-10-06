// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { AppointmentsComponent } from './pages/appointments/appointments';
import { DoctorsComponent } from './pages/doctors/doctors';
import { PrescriptionsComponent } from './pages/prescriptions/prescriptions';
import { PaymentsComponent } from './pages/payments/payments';

export const routes: Routes = [
  // Public routes for authentication
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // Protected routes wrapped in the Layout Shell (sidebar)
  { 
    path: '', 
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'prescriptions', component: PrescriptionsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'reminders', redirectTo: 'dashboard' }, // Reminders route to dashboard
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  
  // Fallback route
  { path: '**', redirectTo: 'login' }
];