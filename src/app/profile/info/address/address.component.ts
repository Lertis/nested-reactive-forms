import { Component } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup } from "@angular/forms";
import { ngValueAccessorProvide } from "../../../common";

@Component({
	selector: 'app-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.scss'],
	providers: [ngValueAccessorProvide(AddressComponent)]
})
export class AddressComponent implements ControlValueAccessor {

	adressForm = new FormGroup({
		street: new FormControl(""),
		zip: new FormControl(0)
	});
	onTouched: Function;

	constructor(readonly controlContainer: ControlContainer) { }

	writeValue(val: any): void {
		val && this.adressForm.setValue(val, { emitEvent: false });
	}
	registerOnChange(fn: () => void): void {
		this.adressForm.valueChanges.subscribe(fn);
	}
	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}
}
