import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {GridsterModule} from 'angular-gridster2';
import { LineChartComponent } from './line-chart/line-chart.component';
import {ChartsModule} from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideMenuComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    GridsterModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
