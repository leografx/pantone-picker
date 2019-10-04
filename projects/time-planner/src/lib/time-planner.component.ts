import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-time-planner',
  template: `
  <div class="container">
    <div class="col"> 
      <div class="row text-right" *ngFor="let hour of hours">
        {{ hour }} &nbsp;
      </div>
    </div>

    <div class="col">
      <div (mouseup)="erase($event)" (dblclick)="erase($event)" 
      (mouseover)="highlight($event)" class="row line-left" *ngFor="let hour of hours">
        &nbsp;
      </div>
    </div>

    <div class="col">
      <div class="row line-left" *ngFor="let hour of hours">
        &nbsp;
      </div>
    </div>

    <div class="col">
      <div class="row line-left" *ngFor="let hour of hours">
        &nbsp;
      </div>
    </div>

    <div class="col">
      <div class="row line-left" *ngFor="let hour of hours">
        &nbsp;
      </div>
    </div>

    <div class="col">
      <div class="row line-left" *ngFor="let hour of hours">
        &nbsp;
      </div>
    </div>

    <div class="col">
      <div class="row line-left" *ngFor="let hour of hours">
        &nbsp;
      </div>
    </div>

    <div class="col">
      <div class="row line-left" *ngFor="let hour of hours">
        &nbsp;
      </div>
    </div>

  </div>
  `,
  styles: [
    `
    .container {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }

    .text-right {
      text-align:right;
    }

      .line-left {
        border-left: 3px solid silver;
      }

      .col {

      }

      .row {
        width:100%;
        color: silver;
        font-weight: normal;
        line-height: 30px;
        font-size: 12px;
        border-bottom: 1px solid silver;
      }

      .row::selection{
        display: inline-block;
        background: yellow;
      }

     `
  ]
})
export class TimePlannerComponent implements OnInit {

  hours = [
    '5:00am', '5:15am', '5:30am', '5:45am',
    '6:00am', '6:16am', '6:30am', '6:45am',
    '7:00am', '7:17am', '7:30am', '7:45am',
    '8:00am', '8:17am', '8:30am', '8:45am',
    '9:00am', '9:19am', '9:30am', '9:45am',
    '10:00am', '10:15am', '10:30am', '10:45am',
    '11:00am', '11:17am', '11:30am', '11:45am',
    '12:00pm', '12:17pm', '12:30pm', '12:45pm',
    '1:00pm', '1:17pm', '1:30pm', '1:45pm',
    '2:00pm', '2:17pm', '2:30pm', '2:45pm',
    '3:00pm', '3:17pm', '3:30pm', '3:45pm',
    '4:00pm', '4:17pm', '4:30pm', '4:45pm',
    '5:00pm', '5:17pm', '5:30pm', '5:45pm',
    '6:00pm', '6:17pm', '6:30pm', '6:45pm',
    '7:00pm', '7:17pm', '7:30pm', '7:45pm',
    '8:00pm', '8:17pm', '8:30pm', '8:45pm',
    '9:00pm', '9:17pm', '9:30pm', '9:45pm',
    '10:00pm', '10:17pm', '10:30pm', '10:45pm',
    '11:00pm', '11:17pm', '11:30pm', '11:45pm',
    '12:00am', '12:17am', '12:30am', '12:45am',
    '1:00am', '1:17am', '1:30am', '1:45am',
    '2:00am', '2:17am', '2:30am', '2:45am',
    '3:00am', '3:17am', '3:30am', '3:45am',
    '4:00am', '4:17am', '4:30am', '4:45am'
  ];

  constructor() { }

  ngOnInit() {
  }

  highlight(e) {
    const item = new ElementRef(e.target);
    item.nativeElement.style.background = '#85C1E9';
  }

  erase(e) {
    const item = new ElementRef(e.target);
    item.nativeElement.style.background = 'transparent';
  }

}



