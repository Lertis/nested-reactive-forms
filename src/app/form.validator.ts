import { AbstractControl, ValidatorFn } from "@angular/forms";

export class FormFieldsValidator {
	static textInputValidation(): ValidatorFn {
		return (control: AbstractControl): { valid: boolean } | null => {
			const fieldValue: string = control.value;
			const valid = [!!fieldValue && fieldValue.trim().length !== 0];
			return valid.every((flag: boolean) => flag) ? null : { valid: false };
		};
	}

	static numberInputValidation(): ValidatorFn {
		return (control: AbstractControl): { valid: boolean } | null => {
			const fieldValue: number = control.value;
			const valid = [fieldValue !== 0 && fieldValue > 0];
			return valid.every((flag: boolean) => flag) ? null : { valid: false };
		};
	}
}
