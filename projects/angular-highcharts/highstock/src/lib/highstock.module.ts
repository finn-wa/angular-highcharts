/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { NgModule } from "@angular/core";
import { StockChartDirective } from "./stockchart.directive";

/**
 * Module containing the `[chart]` directive for use with
 * `highcharts/highstock`. If you want to use other Highcharts modules, instead
 * import the ChartModule found in `angular-highcharts/highcharts` and inject
 * the modules you need using the HIGHCHARTS_MODULES injection token.
 * See the README for more details.
 */
@NgModule({
  exports: [StockChartDirective],
  declarations: [StockChartDirective],
})
export class ChartModule {}
