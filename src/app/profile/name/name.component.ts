import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { FieldControl } from "../../field.control";
import { ngValueAccessorProvide } from "../../common";


@Component({
	selector: 'app-name',
	templateUrl: './name.component.html',
	styleUrls: ['./name.component.scss'],
	providers: [
		ngValueAccessorProvide(NameComponent),
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => NameComponent),
			multi: true
		}
	]
})
export class NameComponent extends FieldControl implements OnInit, OnDestroy, ControlValueAccessor, Validator {
	constructor() {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
	}

	readonly validate = (): ValidationErrors | null => this.valueControl.invalid ? { valid: false } : null;

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
