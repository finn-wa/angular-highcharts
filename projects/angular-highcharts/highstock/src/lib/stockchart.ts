/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 *
 * @author Felix Itzenplitz
 * @author Timothy A. Perez (contributor)
 */
import { ElementRef } from '@angular/core';
import * as Highstock from 'highcharts/highstock';
import { ChartWrapper } from 'angular-highcharts';
import { AsyncSubject, Observable } from 'rxjs';

export class StockChart implements ChartWrapper<Highstock.Chart> {
  private refSubject: AsyncSubject<Highstock.Chart> = new AsyncSubject();
  ref$: Observable<Highstock.Chart> = this.refSubject.asObservable();
  ref: Highstock.Chart;
  constructor(private options: Highstock.Options = { series: [] }) {}

  init(el: ElementRef): void {
    if (!this.ref) {
      Highstock.stockChart(el.nativeElement, this.options, (chart) => {
        if (!this.ref) {
          // TODO: workaround for doubled callbacks on exporting charts: issue #238
          this.refSubject.next(chart);
          this.ref = chart;
          this.refSubject.complete();
        }
      });
    }
  }

  destroy() {
    if (this.ref) {
      this.options = this.ref.options;
      this.ref.destroy();
      this.ref = undefined;

      // new init subject
      this.refSubject = new AsyncSubject();
      this.ref$ = this.refSubject.asObservable();
    }
  }
}
