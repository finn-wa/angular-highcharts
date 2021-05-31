/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { Inject, Injectable } from '@angular/core';
import { AbstractChartService, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Injectable()
export class HighchartsGanttService extends AbstractChartService<
  typeof Highcharts
> {
  constructor(@Inject(HIGHCHARTS_MODULES) chartModules: any[]) {
    super(Highcharts, chartModules);
  }
}
