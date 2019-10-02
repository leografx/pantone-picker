import { NgModule } from '@angular/core';
import { BindingPickerComponent } from './binding-picker.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BindingPickerComponent],
  imports: [CommonModule
  ],
  exports: [BindingPickerComponent]
})
export class BindingPickerModule { }
