/**
 * @license
 * Copyright Felix Itzenplitz. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at
 * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
 */
import { Directive, ElementRef, Input } from "@angular/core";
import * as Highstock from "highcharts/highstock";
import { AbstractChartDirective } from "angular-highcharts";
import { StockChart } from "./stockchart";

/**
 * Directive for use with `highcharts/highstock` dependency. Allows stock charts
 * to be included in Angular templates.
 */
@Directive({ selector: "[chart]" })
export class StockChartDirective extends AbstractChartDirective<Highstock.Chart> {
  @Input() chart: StockChart;

  constructor(protected el: ElementRef) {
    super(el);
  }
}
