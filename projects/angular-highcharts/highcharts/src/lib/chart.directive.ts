/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractChartDirective } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { Chart } from './chart';

/**
 * Highcharts directive for including charts in an Angular template.
 */
@Directive({ selector: '[chart]' })
export class ChartDirective extends AbstractChartDirective<Highcharts.Chart> {
  @Input() chart: Chart;

  constructor(protected el: ElementRef) {
    super(el);
  }
}
