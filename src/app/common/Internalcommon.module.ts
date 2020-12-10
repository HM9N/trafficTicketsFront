import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const componentDeclarations = [ SearchInputComponent, PaymentFormComponent ]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ...componentDeclarations ],
  exports: [ componentDeclarations ]
})
export class InternalcommonModule { }
