import { Component } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup } from "@angular/forms";
import { ngValueAccessorProvide } from "../../common";

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.scss'],
	providers: [ngValueAccessorProvide(InfoComponent)]
})
export class InfoComponent implements ControlValueAccessor {
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

	onTouched: Function;

	constructor(readonly controlContainer: ControlContainer) { }

	writeValue(val: any): void {
		val && this.infoForm.setValue(val, { emitEvent: false });
	}
	registerOnChange(fn: () => void): void {
		this.infoForm.valueChanges.subscribe(fn);
	}
	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}
}
