import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PantonePickerModule } from 'pantone-picker';
import { BindingPickerModule } from 'binding-picker';
import { FoldPickerModule } from 'fold-picker';
import { EnvelopePickerModule } from 'envelope-picker';
import { QrcodeMakeModule } from 'qrcode-make';
import { TimePlannerModule } from 'time-planner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PantonePickerModule,
    BindingPickerModule,
    FoldPickerModule,
    EnvelopePickerModule,
    QrcodeMakeModule,
    TimePlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
