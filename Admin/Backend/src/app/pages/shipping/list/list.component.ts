import { Component } from '@angular/core';
// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Shipping' },
      { label: 'Shipping List', active: true }
    ];


    // Set world-map-line-markers amchart
    let root = am5.Root.new("world-map-line-markers");

    root.setThemes([am5themes_Animated.new(root)]);


    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        opacity: 1,
        projection: am5map.geoMercator(),
      })
    );

    chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color("rgb(222, 226, 232)"),
        stroke: am5.color("#fff"),
      })
    );

  }
}
