import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ChartModule } from "angular-highcharts";
import { HighchartsChartModule } from "highcharts-angular";

import { AppComponent } from "./app.component";
import { CheckboxComponent } from "./profile/checkbox/checkbox.component";
import { AddressComponent } from "./profile/info/address/address.component";
import { CreditComponent } from "./profile/info/credit/credit.component";
import { InfoComponent } from "./profile/info/info.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProjectsTasksComponent } from "./profile/projects-tasks/projects-tasks.component";
import { SimpleFieldComponent } from "./shared/simple.input";

@NgModule({
	imports: [CommonModule, BrowserModule, ReactiveFormsModule, FormsModule, ChartModule, HighchartsChartModule],
	declarations: [
		AppComponent,
		ProfileComponent,
		ProjectsTasksComponent,
		CheckboxComponent,
		InfoComponent,
		AddressComponent,
		CreditComponent,
		SimpleFieldComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
