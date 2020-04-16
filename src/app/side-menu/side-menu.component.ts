import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../widget.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private widgetService: WidgetService) {
  }

  ngOnInit(): void {
  }

  addWidget() {
    this.widgetService.addWidget();
  }
}
