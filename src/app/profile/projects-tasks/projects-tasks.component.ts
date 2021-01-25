import { Component } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup } from "@angular/forms";
import { ngValueAccessorProvide } from "../../common";

@Component({
	selector: 'app-projects-tasks',
	templateUrl: './projects-tasks.component.html',
	styleUrls: ['./projects-tasks.component.scss'],
	providers: [ngValueAccessorProvide(ProjectsTasksComponent)]
})
export class ProjectsTasksComponent implements ControlValueAccessor {
	projectsTasksForm = new FormGroup({
		project: new FormControl(""),
		task: new FormControl(""),
	});

	constructor(readonly controlContainer: ControlContainer) { }

	onTouched: Function;

	writeValue(val: any): void {
		val && this.projectsTasksForm.setValue(val, { emitEvent: false });
	}
	registerOnChange(fn: () => void): void {
		this.projectsTasksForm.valueChanges.subscribe(fn);
	}
	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}
}
