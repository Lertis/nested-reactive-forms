import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-projects-tasks',
	templateUrl: './projects-tasks.component.html'
})
export class ProjectsTasksComponent {
	projectsTasksForm = new FormGroup({
		project: new FormControl(""),
		task: new FormControl(""),
	});

	constructor(readonly controlContainer: ControlContainer) { }
}
