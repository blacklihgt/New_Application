import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Output() sideNavToggled = new EventEmitter<boolean>();

  menuStatus : boolean = false;

  

  constructor(private router: Router) {

   }

   logout() {
    this.router.navigate(['/logout'])
   }

  ngOnInit(): void {
    
    this.toggleSideNav();
  }
   

    

    toggleSideNav() {
      this.menuStatus = !this.menuStatus;
      this.sideNavToggled.emit(this.menuStatus);
    }
  }
