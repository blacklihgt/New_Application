import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DataTablesModule } from 'angular-datatables';
import { TabbleComponent } from './tabble/tabble.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Tabble2Component } from './tabble2/tabble2.component';
import { Tabble3Component } from './tabble3/tabble3.component';

const appRoutes: Routes = [
  
  { path: 'meeting', component: TabbleComponent},
  { path: 'loans', component: Tabble2Component}
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    TabbleComponent,
    Tabble2Component,
    Tabble3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
