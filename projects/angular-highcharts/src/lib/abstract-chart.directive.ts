/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartWrapper } from './chart-wrapper.model';

/**
 * A directive which contains a ChartWrapper.
 */
@Directive()
export abstract class AbstractChartDirective<HighchartsChart>
  implements OnInit, OnDestroy, OnChanges
{
  @Input() chart: ChartWrapper<HighchartsChart>;

  constructor(protected el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.chart.isFirstChange()) {
      this.destroy();
      this.init();
    }
  }

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    this.destroy();
  }

  protected init() {
    this.chart.init(this.el);
  }

  protected destroy() {
    this.chart.destroy();
  }
}
