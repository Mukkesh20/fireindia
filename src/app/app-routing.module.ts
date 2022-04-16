import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './BasicForm/basicForm.component';
import { DebtFormComponent } from './DebtForm/debtForm.component';
import { InvestmentFormComponent } from './InvestmentForm/investmentForm.component';
import { ExpensesFormComponent } from './ExpensesForm/expensesForm.component';
import { MiscellaneousFormComponent } from './MiscellaneousForm/miscellaneousForm.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/BasicDetails' },
  { path: 'BasicDetails', component: BasicFormComponent    },
  { path: 'DebtDetails', component: DebtFormComponent },
  { path: 'InvestmentDetails',  component: InvestmentFormComponent },
  { path: 'ExpensesDetails',  component: ExpensesFormComponent },
  { path: 'MiscellaneousDetails',     component: MiscellaneousFormComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [
    BasicFormComponent, DebtFormComponent,
    InvestmentFormComponent, ExpensesFormComponent, MiscellaneousFormComponent
  ];
}

