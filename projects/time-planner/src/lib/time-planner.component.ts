import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { hours } from './hours';

@Component({
  selector: 'lib-time-planner',
  templateUrl: 'time-planner.html',
  styleUrls: ['time-planner.scss']
})
export class TimePlannerComponent implements OnInit {
  erase = false;
  eraseBtn;
  eraseHours = [];
  hours = hours;
  mouseOver = [];
  select = false;
  selectBtn;
  selectedColor;
  selectedHours = [];
  text = false;
  date: string;
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Output() hoursSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    const d = new Date();
    this.date = this.months[d.getMonth()] + ` ${d.getDate()}, ${d.getFullYear()}`;
    this.selectedColor = '#85C1C9';
  }

  changeColor(e) {
    if (this.select) {
      // console.log(this.selectedHours);
      this.hoursSelected.emit(this.selectedHours);
      this.selectedHours.map(data => {
        data.nativeElement.style.background = this.selectedColor;
        data.nativeElement.style.borderBottomColor = this.selectedColor;
        data.nativeElement.style.borderTopColor = this.selectedColor;
      });

      this.selectedHours = [];
    }

    if (this.erase) {
      this.eraseHours.map(data => {
        data.nativeElement.style.background = 'transparent';
        data.nativeElement.style.borderBottomColor = 'silver';
        data.nativeElement.style.borderTopColor = 'silver';
      });

      this.eraseHours = [];
    }

    const count = this.mouseOver.length;
    this.mouseOver.map((data, index) => {
      data.nativeElement.style.borderLeftColor = 'silver';
      if (index + 1 === count) {
        this.mouseOver = [];
      }
    });
  }

  highlight(e) {
    const item = new ElementRef(e.target);
    if (this.select) {
      if (e.which) {
        this.selectedHours.push(item);
      }
    }

    if (this.erase) {
      if (e.which) {
        this.eraseHours.push(item);
      }
    }
  }

  highlightColor(e) {
    if (e.which) {
      const item = new ElementRef(e.target);
      this.mouseOver.push(item);
      this.mouseOver.map(data => data.nativeElement.style.borderLeftColor = (this.select) ? this.selectedColor : 'red');
    }
  }

  toggleSelect(e) {
    this.changeState();
    this.selectBtn = e;
    this.selectedHours = [];
    this.select = !this.select;
    // this.erase = false;
  }

  toggleErase(e) {
    this.changeState();
    this.eraseBtn = e;
    this.eraseHours = [];
    this.erase = !this.erase;
    // this.select = false;
  }

  toggleText(e) {
    this.changeState();
    this.text = !this.text;
  }

  addInput(e) {
    if (this.text) {
      const id = e.target.id;
      console.log(id);
      // tslint:disable-next-line:max-line-length
      e.target.innerHTML = `<input type="text" id="${id + '-input'}" style="background:transparent; width:190px; height:28px; border: 0px; margin:0px; padding:0px 5px;"  value=""/>`;
      e.target.children[0].focus();
    }
  }

  colorSelected(e) {
    this.selectedColor = e.target.value;
  }

  changeState() {
    this.text = false;
    this.select = false;
    this.erase = false;
  }

}



