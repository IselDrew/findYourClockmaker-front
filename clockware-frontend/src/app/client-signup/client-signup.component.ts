import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './client-signup.component.html',
  styleUrls: ['../shared/styles/form.styles.css'],
})
export class ClientSignupComponent {
  constructor(private router: Router) {}

  signUp() {
    this.router.navigate(['/reservation']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
