import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';

import { AreaComponent } from './area/area.component';
import { BarComponent } from './bar/bar.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { BubbleComponent } from './bubble/bubble.component';
import { CandlestickComponent } from './candlestick/candlestick.component';
import { ColumnComponent } from './column/column.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { LineComponent } from './line/line.component';
import { MixedComponent } from './mixed/mixed.component';
import { PieComponent } from './pie/pie.component';
import { PolarComponent } from './polar/polar.component';
import { RadarComponent } from './radar/radar.component';
import { RadialbarComponent } from './radialbar/radialbar.component';
import { ScatterComponent } from './scatter/scatter.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TreemapComponent } from './treemap/treemap.component';
import { SharedModule } from '../../shared/shared.module';
// breadcrumb
import { BreadcrumbModule } from 'primeng/breadcrumb';
// chart
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    AreaComponent,
    BarComponent,
    BoxplotComponent,
    BubbleComponent,
    CandlestickComponent,
    ColumnComponent,
    HeatmapComponent,
    LineComponent,
    MixedComponent,
    PieComponent,
    PolarComponent,
    RadarComponent,
    RadialbarComponent,
    ScatterComponent,
    TimelineComponent,
    TreemapComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgApexchartsModule,
    BreadcrumbModule,
    SharedModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ChartsModule { }
