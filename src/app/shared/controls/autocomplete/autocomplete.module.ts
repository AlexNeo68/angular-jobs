import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { HighlightPipe } from './pipes/highlight.pipe';



@NgModule({
  declarations: [
    AutocompleteComponent,
    HighlightPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [AutocompleteComponent]
})
export class AutocompleteModule { }
