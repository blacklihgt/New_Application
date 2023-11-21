import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';

@Component({
  selector: 'app-tabble2',
  templateUrl: 'tabble2.component.html',
})
export class Tabble2Component implements AfterViewInit, OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  sideNavStatus: boolean = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private renderer: Renderer2, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.setupDataTable();
    console.log('ngonit called!')
  }

  private setupDataTable(): void {
    this.http.get<any[]>('http://127.0.0.1:3000/products').subscribe((data) => {
      this.dtOptions = {
        columns: [
          {
            title: 'ID',
            data: 'id',
          },
          {
            title: 'First name',
            data: 'firstName',
          },
          {
            title: 'Last name',
            data: 'lastName',
          },
          {
            title: 'Action',
            render: function (data: any, type: any, full: any) {
              return 'View';
            },
          },
        ],
        data : data,
      };

      // Trigger DataTable rendering after setting up dtOptions
      
    });

    
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute('id')) {
        this.router.navigate(['/loans' + event.target.getAttribute('id')]);
        
        
      }
      this.dtTrigger.next(undefined);
      
    });
  }
 

 
}
