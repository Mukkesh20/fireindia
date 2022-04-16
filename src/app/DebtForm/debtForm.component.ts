import { Component, OnInit, ViewChild } from '@angular/core';

class BasicDetails {
  constructor(public name: string = '',
              public age: number = null,
              public retirementAge: number = null,
              public planTillAge: number = null,
              public monthlyIncome: number = null
              ) {
  }
}

@Component({
  selector: 'template-driven-form',
  templateUrl: './debtForm.component.html'
})
export class DebtFormComponent {

  model: BasicDetails = new BasicDetails();
  @ViewChild('f') form: any;
  basicDetails: BasicDetails = new BasicDetails();

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
