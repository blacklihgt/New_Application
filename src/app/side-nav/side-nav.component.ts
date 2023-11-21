import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  
  constructor(private router: Router) {}


  list!: { number: string, name: string, icon: string, route: string }[];
  



  ngOnInit(): void {
    this.list = [

      {
        number: '0',
        name: 'Price List',
        icon: 'fa-solid fa-user-group',
        route: '/groups'
      },
      

      {
        number: '2',
        name: 'Meeting',
        icon: 'fa-solid fa-handshake',
        route: '/meeting'

      },

      {
        number: '3',
        name: 'Customers',
        icon: 'fa-solid fa-handshake',
        route: '/customers'

      },

      {
        number: '4',
        name: 'Loans',
        icon: 'fa-solid fa-hand-holding-dollar',
        route: '/loans'

      },
      {
        number: '5',
        name: 'Due Today',
        icon: 'fa-solid fa-handshake',
        route: '/duetoday'

      },
      {
        number: '6',
        name: 'Overdue',
        icon: 'fa-solid fa-handshake',
        route: '/overdue'

      },
      {
        number: '7',
        name: 'NPL',
        icon: 'fa-solid fa-handshake',
        route: '/npl'

      },
      {
        number: '8',
        name: 'Repaid',
        icon: 'fa-solid fa-handshake',
        route: '/repaid'

      },
      {
        number: '9',
        name: 'Daily Payments',
        icon: 'fa-solid fa-handshake',
        route: '/dailypayments'

      }
      
     

    ];
  }

 
}

