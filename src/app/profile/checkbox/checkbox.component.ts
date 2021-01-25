import { Component, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";
import { FieldControl } from "../../field.control";
import { ngValueAccessorProvide } from "../../common";

@Component({
  selector: 'app-checkbox',
	template: `
	<div class="row">
		<label for="Full Name"> Dispay </label>
		<input type="checkbox" [formControl]="valueControl" class="">
	</div>`,
	providers: [ngValueAccessorProvide(CheckboxComponent)]
})
export class CheckboxComponent extends FieldControl implements OnInit, OnDestroy, ControlValueAccessor {
	constructor() {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
