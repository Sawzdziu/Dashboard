import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';
import {ChartOptions, ChartType} from 'chart.js';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnDestroy {

  @Input()
  widget;
  @Input()
  resizeEvent: EventEmitter<any>;

  resizeSub: Subscription;

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.resizeSub = this.resizeEvent.subscribe((widget) => {
      if (widget === this.widget && widget != null) { // or check id , type or whatever you have there
        // resize your widget, chart, map , etc.
        console.log(widget);
      }
    });
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }

}
