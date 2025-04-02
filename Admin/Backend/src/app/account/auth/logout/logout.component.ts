import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  // set the current year
  year: number = new Date().getFullYear();
  // Carousel navigation arrow show
  showNavigationArrows: any;

  constructor(private authService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }

      /**
   * Logout the user
   */
      logout() {
        this.authService.logout();
        // if (environment.defaultauth === 'firebase') {
        //   this.authService.logout();
        // } else {
        //   this.authFackservice.logout();
        // }
        this.router.navigate(['/auth/login']);
      }

}
