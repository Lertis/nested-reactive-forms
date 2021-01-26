import { Component } from '@angular/core';
import { ControlContainer } from "@angular/forms";

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html'
})
export class InfoComponent {
	constructor(readonly controlContainer: ControlContainer) { }
}
