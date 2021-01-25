import { Component, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";
import { FieldControl } from "../../field.control";
import { ngValueAccessorProvide } from "../../common";


@Component({
	selector: 'app-name',
	templateUrl: './name.component.html',
	styleUrls: ['./name.component.scss'],
	providers: [ngValueAccessorProvide(NameComponent)]
})
export class NameComponent extends FieldControl implements OnInit, OnDestroy, ControlValueAccessor {
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
