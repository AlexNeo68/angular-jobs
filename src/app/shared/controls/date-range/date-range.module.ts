import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateModule } from 'app/shared/controls/date/date.module';



@NgModule({
  declarations: [
    DateRangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DateModule
  ],
  exports: [DateRangeComponent]
})
export class DateRangeModule { }
