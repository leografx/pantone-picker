import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PantonePickerModule } from 'pantone-picker';
import { BindingPickerModule } from 'binding-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PantonePickerModule,
    BindingPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
