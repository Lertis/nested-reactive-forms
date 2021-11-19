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

	addPoint(v: number) {
		if (this.chart) {
			this.chart.addPoint(v);
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
					selection: function (e) {
						const x_min = e.xAxis[0].min;
						const x_max = e.xAxis[0].max;
						console.log(`Selection x: form ${x_min} to ${x_max}`);
						console.log(this);
						console.log(`X data ${this.series[0].data}`);
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
					data: [1, 2, 3]
				},
			],
		});
		this.chart = chart;
		for (let index = 0; index < 15; index++) {
			chart.addPoint(Math.floor(Math.random() * 10 * index));
		}
		chart.ref$.subscribe(console.log);
	}
}
