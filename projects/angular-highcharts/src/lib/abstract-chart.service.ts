/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';

export const HIGHCHARTS_MODULES = new InjectionToken<any[]>(
  'HighchartsModules'
);

/**
 * Service which loads Highcharts modules into the Highcharts core.
 */
export abstract class AbstractChartService<HighchartsCore> {
  constructor(
    private highchartsCore: HighchartsCore,
    private chartModules: any[]
  ) {
    this.initModules();
  }

  initModules() {
    this.chartModules.forEach((chartModule) => {
      chartModule(this.highchartsCore);
    });
  }
}
