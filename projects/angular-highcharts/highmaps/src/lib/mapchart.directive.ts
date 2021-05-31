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
import * as Highmaps from 'highcharts/highmaps';
import { MapChart } from './mapchart';

/**
 * Directive for use with `highcharts/highmaps` dependency. Allows maps to be
 * included in Angular templates.
 */
@Directive({ selector: '[chart]' })
export class MapChartDirective extends AbstractChartDirective<Highmaps.Chart> {
  @Input() chart: MapChart;

  constructor(protected el: ElementRef) {
    super(el);
  }
}
