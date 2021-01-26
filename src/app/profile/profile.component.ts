import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	nestedForm: FormGroup = new FormGroup({
		name: new FormControl(""),
		projectsTasks: new FormGroup({
			project: new FormControl(""),
			task: new FormControl("")
		}),
		info: new FormGroup({
			address: new FormGroup({
				street: new FormControl(""),
				zip: new FormControl(0)
			}),
			credit: new FormGroup({
				cardName: new FormControl(""),
				cvv: new FormControl(0)
			})
		}),
		checkbox: new FormControl(false)
	});

	constructor() {
		this.nestedForm.valueChanges.subscribe((form) => {
			console.log(form);
		});
	}

	onSubmit() {
		console.log(this.nestedForm.value);
	}
}
