import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Interface for a class which wraps a generic Highcharts Chart object.
 */
export interface ChartWrapper<HighchartsChart> {
  ref$: Observable<HighchartsChart>;
  ref: HighchartsChart;
  init(el: ElementRef): void;
  destroy(): void;
}
