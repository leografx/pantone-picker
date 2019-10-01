import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Colors } from './colors';


@Component({
  selector: 'lib-pantone-picker',
  templateUrl: 'pantone-picker.html',
  styleUrls: ['pantone-picker.scss']
})
export class PantonePickerComponent implements OnInit {
  title = 'color';
  @Input() label;
  finish = 'C';
  colorSwatch = new Colors();
  colorList;
  colorListCMYK;
  colors = [];
  colorSelectList = '';
  colorLabel = { rgb: '', Name: '' };
  @Output() selectColors: EventEmitter<any> = new EventEmitter();
  @Output() selectColorList: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.colorList = this.colorSwatch.coated;
  }

  ngOnInit() {

  }

  setColor(color) {
    this.colorLabel.rgb = color.red;
    this.colorLabel.rgb += ', ';
    this.colorLabel.rgb += color.green;
    this.colorLabel.rgb += ', ';
    this.colorLabel.rgb += color.blue;
  }

  getColor(color: string) {
    if (color.length >= 3) {
      const exp = new RegExp('pantone ' + color);
      this.colorList.filter((data) => data.Name.toLowerCase().match(exp)).map(data => {
        data.Name = data.Name.replace('PANTONE', '');
        this.colorLabel = data;
        this.setColor(data);
        this.colors.push(this.colorLabel);
      });

      this.selectColors.emit(this.colors);
      this.updateColorSelectList();
    }
  }

  updateColorSelectList() {
    this.colorSelectList = '';
    this.colors.map((data, index) => {
      this.colorSelectList += data.Name + ', ';
    });

    this.colorSelectList = this.colorSelectList.substr(0, this.colorSelectList.length - 2);
    this.selectColorList.emit(this.colorSelectList);
  }

  removeSwatch(index) {
    this.colors.splice(index, 1);
    this.selectColors.emit(this.colors);
    this.updateColorSelectList();
  }

  changeColorUncoated() {
    this.colorList = [];
    this.colorList = this.colorSwatch.uncoated;
  }

  changeColorCoated() {
    this.colorList = [];
    this.colorList = this.colorSwatch.coated;
  }

  changeColorCMYK() {
    // this.colorList = JSON.parse(color);
  }
}
