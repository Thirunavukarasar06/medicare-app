import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app-layout.html',
  styleUrls: ['./app-layout.css']
})
export class AppLayoutComponent implements OnInit {
  currentUser$: Observable<any> | undefined;
  appointmentCount$: Observable<number> | undefined;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.currentUser$ = this.dataService.currentUser$;
    
    // Redirect to login if user data is missing (guard)
    this.currentUser$.subscribe(user => {
      if (!user) this.router.navigate(['/login']);
    });

    // Dynamically count only 'Upcoming' appointments for the badge
    this.appointmentCount$ = this.dataService.appointments$.pipe(
      map(apts => apts.filter(a => a.status === 'Upcoming').length)
    );
  }
}