import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PantonePickerModule } from 'pantone-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PantonePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
