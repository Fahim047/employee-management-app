import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  logout() {
    // Implement your logout logic here
    console.log("Logging out...")
    // Example: this.authService.logout();
  }

}
