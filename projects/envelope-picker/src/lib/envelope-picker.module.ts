import { NgModule } from '@angular/core';
import { EnvelopePickerComponent } from './envelope-picker.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [EnvelopePickerComponent],
  imports: [CommonModule
  ],
  exports: [EnvelopePickerComponent]
})
export class EnvelopePickerModule { }
