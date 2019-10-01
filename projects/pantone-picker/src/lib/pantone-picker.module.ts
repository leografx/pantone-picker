import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PantonePickerComponent } from './pantone-picker.component';



@NgModule({
  declarations: [PantonePickerComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule
  ],
  exports: [PantonePickerComponent]
})
export class PantonePickerModule { }
