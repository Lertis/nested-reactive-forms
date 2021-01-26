import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-address',
	templateUrl: './address.component.html'
})
export class AddressComponent {

	adressForm = new FormGroup({
		street: new FormControl(""),
		zip: new FormControl(0)
	});

	constructor(readonly controlContainer: ControlContainer) { }
}
