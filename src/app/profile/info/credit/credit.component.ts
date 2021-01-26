import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-credit',
	templateUrl: './credit.component.html'
})
export class CreditComponent {
	creditForm = new FormGroup({
		cardName: new FormControl(""),
		cvv: new FormControl(0)
	});
	constructor(readonly controlContainer: ControlContainer) { }
}
