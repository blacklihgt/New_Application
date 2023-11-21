import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashproj';
  sideNavStatus: boolean = false

  constructor(private router: Router) {}
  handleSideNavToggle(event: boolean) {
    this.sideNavStatus = event;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }




}
