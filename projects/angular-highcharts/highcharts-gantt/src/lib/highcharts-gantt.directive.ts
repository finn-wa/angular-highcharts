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
import { HighchartsGantt } from './highcharts-gantt';

/**
 * Directive for use with `highcharts/highcharts-gantt` dependency. Allows
 * Gantt charts to be included in Angular templates.
 */
@Directive({ selector: '[chart]' })
export class HighchartsGanttDirective extends AbstractChartDirective<Highcharts.Chart> {
  @Input() chart: HighchartsGantt;

  constructor(protected el: ElementRef) {
    super(el);
  }
}
