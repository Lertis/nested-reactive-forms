import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html'
})
export class InfoComponent {
	infoForm = new FormGroup({
		address: new FormGroup({
			street: new FormControl(""),
			zip: new FormControl(0)
		}),
		credit: new FormGroup({
			cardName: new FormControl(""),
			cvv: new FormControl(0)
		})
	});

	constructor(readonly controlContainer: ControlContainer) { }
}
