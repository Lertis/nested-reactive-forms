import { Component } from "@angular/core";
import { ControlContainer } from "@angular/forms";

@Component({
	selector: "app-projects-tasks",
	templateUrl: "./projects-tasks.component.html"
})
export class ProjectsTasksComponent {
	constructor(readonly controlContainer: ControlContainer) { }
}
