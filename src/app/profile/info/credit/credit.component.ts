import { Component } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup } from "@angular/forms";
import { ngValueAccessorProvide } from "../../../common";

@Component({
	selector: 'app-credit',
	templateUrl: './credit.component.html',
	styleUrls: ['./credit.component.scss'],
	providers: [ngValueAccessorProvide(CreditComponent)]
})
export class CreditComponent implements ControlValueAccessor {

	creditForm = new FormGroup({
		cardName: new FormControl(""),
		cvv: new FormControl(0)
	});
	onTouched: Function;

	constructor(readonly controlContainer: ControlContainer) { }

	writeValue(val: any): void {
		val && this.creditForm.setValue(val, { emitEvent: false });
	}
	registerOnChange(fn: () => void): void {
		this.creditForm.valueChanges.subscribe(fn);
	}
	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

}
