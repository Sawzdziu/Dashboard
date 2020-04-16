import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() {
  }

  // Observable string sources
  private addWidgetSource = new Subject<string>();

  // Observable string streams
  addWidget$ = this.addWidgetSource.asObservable();

  addWidget() {
    this.addWidgetSource.next();
  }
}
