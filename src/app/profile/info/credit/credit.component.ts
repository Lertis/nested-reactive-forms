import { Component } from "@angular/core";
import { ControlContainer } from "@angular/forms";

@Component({
	selector: "app-credit",
	templateUrl: "./credit.component.html"
})
export class CreditComponent {
	constructor(readonly controlContainer: ControlContainer) { }
}
