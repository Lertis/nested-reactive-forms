import { Directive, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { filter, map, pairwise, takeUntil } from "rxjs/operators";
import { isNullOrUndefined } from "./common";

@Directive()
export class FieldControl implements OnInit, OnDestroy {
	protected destroy$ = new Subject<void>();
	valueControl = new FormControl();
	onTouched: Function;
	propagateChange = (_: any) => {};
	propagateBlur = (_: any) => {};

	ngOnInit(): void {
		this.valueControl.valueChanges.pipe(
			takeUntil(this.destroy$),
			pairwise(),
			filter(([oldValue, newValue]) => oldValue !== newValue),
			map(([oldValue, newValue]) => newValue)
		).subscribe((newValue) => {
			this.propagateChange(newValue);
		});
	}

	writeValue(value: any): void {
		if (!isNullOrUndefined(value)) {
			this.valueControl.setValue(value);
		}
	}

	registerOnChange(fn: () => void): void {
		this.valueControl.valueChanges.subscribe(fn);
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
