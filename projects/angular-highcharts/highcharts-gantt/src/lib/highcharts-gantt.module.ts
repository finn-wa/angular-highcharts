/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { NgModule } from '@angular/core';
import { HIGHCHARTS_MODULES } from 'angular-highcharts';
import { HighchartsGanttDirective } from './highcharts-gantt.directive';
import { HighchartsGanttService } from './highcharts-gantt.service';

/**
 * Provides the [chart] directive for including charts in an Angular template,
 * using the 'highcharts/highcharts-gantt' import as the Highcharts core.
 *
 * You can inject Highcharts modules by providing your own value for the
 * HIGHCHARTS_MODULES injection token. See the README for more information.
 */
@NgModule({
  exports: [HighchartsGanttDirective],
  declarations: [HighchartsGanttDirective],
  providers: [
    { provide: HIGHCHARTS_MODULES, useValue: [] },
    HighchartsGanttService,
  ],
})
export class ChartModule {
  constructor(private cs: HighchartsGanttService) {
    this.cs.initModules();
  }
}
