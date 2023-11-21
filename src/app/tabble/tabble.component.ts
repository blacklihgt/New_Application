import { Component, OnInit } from '@angular/core';
import { DataTablesResponse } from './datatables-response.model';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';

/// <reference types="datatables.net" />

@Component({
  selector: 'app-tabble',
  templateUrl: 'tabble.component.html'
})
export class TabbleComponent implements OnInit {
  constructor(private http: HttpClient) {};
  dtOptions: DataTables.Settings = {};
  sideNavStatus: boolean = false;
  

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'https://d8f7c632-d3bf-4345-bb9f-5aa8856c39d7.mock.pstmn.io/data',
            dataTablesParameters, {}
          ).subscribe((resp: { recordsTotal: any; recordsFiltered: any; data: any; }) => {
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: resp.data             // <-- see here
            });
          });
      },
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }
}
