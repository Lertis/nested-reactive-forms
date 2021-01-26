import { Component } from '@angular/core';
import { ControlContainer } from "@angular/forms";

@Component({
	selector: 'app-address',
	templateUrl: './address.component.html'
})
export class AddressComponent {
	constructor(readonly controlContainer: ControlContainer) { }
}
