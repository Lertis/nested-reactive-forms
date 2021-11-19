import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

import * as Highcharts from "highcharts";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
	showDialog = false;
	Highcharts: typeof Highcharts = Highcharts;
	chartOptions: Highcharts.Options = {
		chart: {
			type: 'line',
			zoomType: 'x',

		},
		series: [
			{
				type: "line",
				data: [1, 2, 3, 4, 5],
			}
		]
	};
	chart: Chart;


	ngOnInit() {
		this.init();
	}

	addSerie() {
		this.chart.addSeries({
			name: 'Line ' + Math.floor(Math.random() * 10),
			type: "line",
			data: [
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10)
			],
		}, true, true);
	}

	init() {
		var innerFunctionToHackThis = (selectedPoints: any) => {
			const indexes = [];
			selectedPoints.forEach(el => indexes.push(el.index));
			const values = [];
			for (const [_, value] of Object.entries(indexes)) {
				values.push(this.chart.ref.series[0]["processedYData"][value]);
			}
			alert(`Selected Points: ${JSON.stringify(values)}`);
		};

		const chart = new Chart({
			chart: {
				type: 'line',
				zoomType: 'x',
				events: {
					selection: function (event: Highcharts.ChartSelectionContextObject) {
						const xMin = event.xAxis[0].min;
						const xMax = event.xAxis[0].max;
						const selectedPoints = []
						Highcharts.each(this.series, series => {
							Highcharts.each(series.points, point => {
								if (point.x >= xMin && point.x <= xMax) {
									selectedPoints.push(point);
								}
							});
						});
						innerFunctionToHackThis(selectedPoints);
						return false;
					},
				},
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
					type: "line",
					data: [1, 3, 8, 5, 2, 5, 9]
				},
			],
		});
		this.chart = chart;
	}
}

