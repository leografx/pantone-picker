import { NgModule } from '@angular/core';
import { FoldPickerComponent } from './fold-picker.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FoldPickerComponent],
  imports: [CommonModule
  ],
  exports: [FoldPickerComponent]
})
export class FoldPickerModule { }
