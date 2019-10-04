import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePlannerComponent } from './time-planner.component';



@NgModule({
  declarations: [TimePlannerComponent],
  imports: [
    CommonModule
  ],
  exports: [TimePlannerComponent]
})
export class TimePlannerModule { }
