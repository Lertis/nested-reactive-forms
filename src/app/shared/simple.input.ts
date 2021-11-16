import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, ValidationErrors, Validator } from "@angular/forms";
import { ngValueAccessorProvide, ngValueValidatorsProvide } from "../common";
import { FieldControlDirective } from "../field.control";
import { FormFieldsValidator } from "../form.validator";

@Component({
	selector: "app-simple-field",
	template: `
	<div class="row">
		<label for="Full Name"> {{displayValue}} </label>
		<input [type]="type" [formControl]="valueControl" class="">
	</div>
`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		ngValueAccessorProvide(SimpleFieldComponent),
		ngValueValidatorsProvide(SimpleFieldComponent)
	]
})
export class SimpleFieldComponent extends FieldControlDirective implements OnInit, ControlValueAccessor, Validator {

	@Input() displayValue!: string;
	@Input() type: "text" | "number" = "text";
	@Input() validationRequired = true;

	ngOnInit() {
		if (this.validationRequired) {
			this.setValidatorDependsOnFieldType();
		}
	}

	private setValidatorDependsOnFieldType() {
		if (this.type === "text") {
			this.valueControl.setValidators([FormFieldsValidator.textInputValidation()]);
		}

		if (this.type === "number") {
			this.valueControl.setValidators([FormFieldsValidator.numberInputValidation()]);
		}
	}

	readonly validate = (): ValidationErrors | null => this.valueControl.invalid ? { valid: false } : null;
}
