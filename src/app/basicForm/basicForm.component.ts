import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
  templateUrl: './basicForm.component.html'
})
export class BasicFormComponent {

  model: BasicDetails = new BasicDetails();
  @ViewChild('f') form: any;
  basicDetails: BasicDetails = new BasicDetails();


  constructor(private router: Router) {
    this.model.name = localStorage.getItem('name');
    this.model.age = parseInt(localStorage.getItem('age'));
    this.model.retirementAge = parseInt(localStorage.getItem('retirementAge'));
    this.model.planTillAge = parseInt(localStorage.getItem('planTillAge'));
    this.model.monthlyIncome = parseInt(localStorage.getItem('monthlyIncome'));
  }

  onInit() {

  }

  onSubmit() {
    if (this.form.valid) {
      localStorage.setItem("name", (<HTMLInputElement>document.getElementById("name")).value);
      localStorage.setItem("age", (<HTMLInputElement>document.getElementById("age")).value);
      localStorage.setItem("retirementAge", (<HTMLInputElement>document.getElementById("retirementAge")).value);
      localStorage.setItem("planTillAge", (<HTMLInputElement>document.getElementById("planTillAge")).value);
      localStorage.setItem("monthlyIncome", (<HTMLInputElement>document.getElementById("monthlyIncome")).value);
      console.log("Form Submitted!");
      this.router.navigate(['/InvestmentDetails']);
      //this.form.reset();
    }
  }
}
