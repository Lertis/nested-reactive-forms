import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from "./profile/profile.component";
import { NameComponent } from "./profile/name/name.component";
import { CreditComponent } from "./profile/info/credit/credit.component";
import { AddressComponent } from "./profile/info/address/address.component";
import { InfoComponent } from "./profile/info/info.component";
import { CheckboxComponent } from "./profile/checkbox/checkbox.component";
import { ProjectsTasksComponent } from "./profile/projects-tasks/projects-tasks.component";
import { SimpleFieldComponent } from "./shared/simple.input";

@NgModule({
	imports: [CommonModule, BrowserModule, ReactiveFormsModule, FormsModule],
	declarations: [
		AppComponent,
		ProfileComponent,
		NameComponent,
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
