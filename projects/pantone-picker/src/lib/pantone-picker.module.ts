import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PantonePickerComponent } from './pantone-picker.component';



@NgModule({
  declarations: [PantonePickerComponent],
  imports: [HttpClientModule, BrowserModule
  ],
  exports: [PantonePickerComponent]
})
export class PantonePickerModule { }
