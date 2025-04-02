import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: "apex-line",
    component: LineComponent
  },
  {
    path: "apex-area",
    component: AreaComponent
  },
  {
    path: "apex-column",
    component: ColumnComponent
  },
  {
    path: "apex-bar",
    component: BarComponent
  },
  {
    path: "apex-mixed",
    component: MixedComponent
  },
  {
    path: "apex-timeline",
    component: TimelineComponent
  },
  {
    path: "apex-candlestick",
    component: CandlestickComponent
  },
  {
    path: "apex-boxplot",
    component: BoxplotComponent
  },
  {
    path: "apex-bubble",
    component: BubbleComponent
  },
  {
    path: "apex-scatter",
    component: ScatterComponent
  },
  {
    path: "apex-heatmap",
    component: HeatmapComponent
  },
  {
    path: "apex-treemap",
    component: TreemapComponent
  },
  {
    path: "apex-pie",
    component: PieComponent
  },
  {
    path: "apex-radialbar",
    component: RadialbarComponent
  },
  {
    path: "apex-radar",
    component: RadarComponent
  },
  {
    path: "apex-polar",
    component: PolarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class ChartsRoutingModule { }
