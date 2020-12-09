import { SearchInputComponent } from './components/search-input/search-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchInputComponent],
  exports: [ SearchInputComponent ]
})
export class InternalcommonModule { }
