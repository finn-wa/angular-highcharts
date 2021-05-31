# angular-highcharts

[![NPM version](https://img.shields.io/npm/v/angular-highcharts.svg)](https://npmjs.org/package/angular-highcharts)
[![NPM downloads](https://img.shields.io/npm/dt/angular-highcharts.svg)](https://npmjs.org/package/angular-highcharts)
![](https://github.com/cebor/angular-highcharts/workflows/Node.js%20Package/badge.svg)

This is a directive for an easy usage of [Highcharts](https://www.highcharts.com/) with angular.

## Requirements

```json
{
  "angular": ">=10.0.0",
  "highcharts": ">=7.0.0"
}
```

## Installation

### yarn

```bash
# install angular-highcharts and highcharts
yarn add angular-highcharts highcharts
```

### npm

```bash
# install angular-highcharts and highcharts
npm i --save angular-highcharts highcharts
```

## Usage Example

```typescript
// app.module.ts
import { ChartModule } from 'angular-highcharts/highcharts';

@NgModule({
  imports: [
    ChartModule, // add ChartModule to your imports
  ],
})
export class AppModule {}
```

```typescript
// chart.component.ts
import { Chart } from 'angular-highcharts/highcharts';

@Component({
  template: `
    <button (click)="add()">Add Point!</button>
    <div [chart]="chart"></div>
  `,
})
export class ChartComponent {
  chart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Linechart',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
      },
    ],
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
```

### Highmaps, Highstock, and Highcharts Gantt

The Highcharts library consists of a single **core** and optional **modules**.
The core provides the base feature set and modules provide extras.
This library allows you to choose a core via the path used to import
the `ChartModule`.

This is a list of the available cores and their respective import paths:

- Highcharts: `'angular-highcharts/highcharts'`
- Highmaps: `'angular-highcharts/highmaps'`
- Highstock: `'angular-highcharts/highstock'`
- Highcharts Gantt: `'angular-highcharts/highcharts-gantt'`

If you want to use the features of more than one core, choose Highcharts and add the other feature sets as modules.

e.g. To use highmaps and highstock in the same app:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HIGHCHARTS_MODULES } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts/highcharts';
import stock from 'highcharts/modules/stock.src';
import map from 'highcharts/modules/map.src';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartModule],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [stock, map] }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Or if you only intend to use maps and don't need any modules:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts/highmaps'; // Highmaps core

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

See the official documentation [here](https://www.highcharts.com/docs/getting-started/installation#c-load-highcharts-stock-or-highcharts-maps) for more information on cores and modules.

## API Docs

### Chart

The Chart object. Available in the `angular-highcharts/highcharts` entry point.

Type: `class`

#### Constructor

```typescript
new Chart(options: Options)
```

#### Properties

```typescript
ref: Highcharts.Chart;
```

Deprecated. Please use `ref$`.

```typescript
ref$: Observable<Highcharts.Chart>
```

Observable that emits a Highcharts.Chart - [Offical Chart API Docs](https://api.highcharts.com/class-reference/Highcharts.Chart)

#### Methods

```typescript
addPoint(point: Point, [serieIndex: number = 0]): void
```

Adds a point to a serie

```typescript
removePoint(pointIndex: number, [serieIndex: number = 0], [redraw: boolean = true], [shift: boolean = false]): void
```

Removes a point from a serie

```typescript
addSeries(series: ChartSerie): void
```

Adds a series to the chart

```typescript
removeSeries(seriesIndex: number): void
```

Remove series from the chart

### StockChart

The Chart object. Available in the `angular-highcharts/highstock` entry point.
If you are using the `angular-highcharts/highcharts` entry point with the `highstock` module, you will not be able to use this class. However, the
regular `Chart` class will

Type: `class`

#### Constructor

```typescript
new StockChart(options);
```

#### Properties

```typescript
ref: Highstock.Chart;
```

Deprecated. Please use `ref$`.

```typescript
ref$: Observable<Highstock.Chart>
```

Observable that emits a Highstock.Chart

### MapChart

The Chart object. Available in the `angular-highcharts/highmaps` entry point.

Type: `class`

#### Constructor

```typescript
new MapChart(options);
```

#### Properties

```typescript
ref;
```

Deprecated. Please use `ref$`.

```typescript
ref$;
```

Observable that emits a Highmaps.Chart

## Using Highcharts modules

To use Highcharts modules you have to import them and provide them in a factory (required for aot).
You can find the list of available modules in the highcharts folder `ls -la node_modules/highcharts/modules`.

**Hint:** Highcharts-more is a exception, you find this module in the root folder.
Don't forget to use the modules with the `.src` suffix, minimized highcharts modules are not importable.

### Example

```typescript
// app.module.ts
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';

@NgModule({
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting] }, // add as factory to your providers
  ],
})
export class AppModule {}
```

### Highstock & Highmaps support

#### Highstock

For Highstock support load the following module

```ts
// app.module.ts
import * as highstock from 'highcharts/modules/stock.src';

@NgModule({
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock ] }
...
```

```ts
// chart.component.ts
import { StockChart } from 'angular-highcharts';

@Component({
  template: ` <div [chart]="stockChart"></div> `,
})
export class ChartComponent {
  stockChart = new StockChart({ options });
}
```

[Example Demo](https://stackblitz.com/edit/angular-highcharts-stock)

### Highmaps

For Highmaps support load the following module

```ts
// app.module.ts
import * as highmaps from 'highcharts/modules/map.src';

@NgModule({
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ highmaps ] }
...
```

```ts
// chart.component.ts
import { MapChart } from 'angular-highcharts';

@Component({
  template: ` <div [chart]="mapChart"></div> `,
})
export class ChartComponent {
  mapChart = new MapChart({ options });
}
```

Offical Highcharts NPM Docs: http://www.highcharts.com/docs/getting-started/install-from-npm

## Troubleshooting

If you expiring typing errors while you build/serve your angular app the following could be helpful:

```ts
// override options type with <any>
chart = new Chart({ options } as any);
```

This is very useful when using `gauge chart` type.

## Demo

- [Demo](https://angular-9nkrgd.stackblitz.io)
- [Code](https://stackblitz.com/edit/angular-9nkrgd)

## License

MIT © Felix Itzenplitz
