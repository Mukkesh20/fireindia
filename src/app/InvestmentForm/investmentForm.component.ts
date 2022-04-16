import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from "ng5-slider";


class BasicDetails {
  constructor(public stocks: number = null,
              public mutualFunds: number = null,
              public debtFunds: number = null,
              public gold: number = null,
              public realEstate: number = null,
              public crypto: number = null,
              public emergencyFund: number = null,
              public cash: number = null,
              public others: number = null
              ) {
  }
}

@Component({
  selector: 'template-driven-form',
  templateUrl: './investmentForm.component.html'
})
export class InvestmentFormComponent {

  model: BasicDetails = new BasicDetails();
  @ViewChild('f') form: any;
  basicDetails: BasicDetails = new BasicDetails();
  value: number = 6;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  onSubmit() {
    if (this.form.valid) {
      localStorage.setItem("name", (<HTMLInputElement>document.getElementById("name")).value);
      localStorage.setItem("age", (<HTMLInputElement>document.getElementById("age")).value);
      localStorage.setItem("retirementAge", (<HTMLInputElement>document.getElementById("retirementAge")).value);
      localStorage.setItem("planTillAge", (<HTMLInputElement>document.getElementById("planTillAge")).value);
      localStorage.setItem("monthlyIncome", (<HTMLInputElement>document.getElementById("monthlyIncome")).value);
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
}
