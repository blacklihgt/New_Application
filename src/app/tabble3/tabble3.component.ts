import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';

// Example from https://datatables.net/examples/plug-ins/range_filtering.html
@Component({
  selector: 'app-tabble3',
  templateUrl: 'tabble3.component.html'
})
export class Tabble3Component implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement!: DataTableDirective;
  min!: number;
  max!: number;

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    // We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
    $.fn['dataTable'].ext.search.push(( data: string[]) => {
      const id = parseFloat(data[0]) || 0; // use data for the id column
      if ((isNaN(this.min) && isNaN(this.max)) ||
        (isNaN(this.min) && id <= this.max) ||
        (this.min <= id && isNaN(this.max)) ||
        (this.min <= id && id <= this.max)) {
        return true;
      }
      return false;
    });

    this.dtOptions = {
      ajax: 'data/data.json',
      columns: [{
        title: 'Loan ID',
        data: 'id'
      }, {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Type',
        data: 'type'
      },
      {
        title: 'Expected',
        data: 'expected'
      },
      {
        title: 'Paid',
        data: 'paid'
      },
      {
        title: 'Date',
        data: 'date'
      }]
    };
  }

  ngOnDestroy(): void {
    // We remove the last function in the global ext search array so we do not add the fn each time the component is drawn
    // /!\ This is not the ideal solution as other components may add other search function in this array, so be careful when
    // handling this global variable
    $.fn['dataTable'].ext.search.pop();
  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
}
