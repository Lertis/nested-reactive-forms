import { forwardRef, Type } from "@angular/core";
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from "@angular/forms";

export function ngValueAccessorProvide<T>(component: Type<T>) {
	return {
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef((): Type<T> => component),
		multi: true
	};
}

export function ngValueValidatorsProvide<T>(component: Type<T>) {
	return {
		provide: NG_VALIDATORS,
		useExisting: forwardRef((): Type<T> => component),
		multi: true
	};
}

export function isNullOrUndefined(value: unknown): boolean {
	return value === null || value === undefined;
}
