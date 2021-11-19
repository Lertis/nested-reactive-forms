import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
	chart: Chart;

	ngOnInit() {
		this.init();
	}

	addPoint() {
		if (this.chart) {
			this.chart.addPoint(Math.floor(Math.random() * 10));
		} else {
			alert('init chart, first!');
		}
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

	removePoint() {
		this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
	}

	removeSerie() {
		this.chart.removeSeries(this.chart.ref.series.length - 1);
	}

	init() {
		const chart = new Chart({
			chart: {
				type: 'line',
				zoomType: 'x',
				events: {
					redraw: function () {
						console.log('x0');
					},
					selection: function (event) {
						console.log(event.xAxis);
						console.log(event.yAxis);
						return true;
					},
				},
			},
			title: {
				text: 'Linechart'
			},
			credits: {
				enabled: false
			},
			series: [
				{
					name: 'Line 1',
					type: "line",
					data: [1, 2, 3]
				},
			],
		});
		chart.addPoint(4);
		this.chart = chart;
		chart.addPoint(5);
		setTimeout(() => chart.addPoint(6), 20);
		chart.ref$.subscribe(console.log);
	}
}
