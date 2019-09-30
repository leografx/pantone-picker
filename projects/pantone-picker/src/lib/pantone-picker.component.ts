import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  colorLabel = { rgb: '', Name: '' };
  @Output() selectColors: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.colorList = this.colorSwatch.coated;
    // this.http.get('/assets/color.json').subscribe((data) => this.colorList = data);
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
      // console.log(this.selectColors);
    }
  }

  removeSwatch(index) {
    this.colors.splice(index, 1);
    this.selectColors.emit(this.colors);
    // console.log(this.selectColors);
  }

  changeColorUncoated() {
    this.colorList = [];
    this.colorList = this.colorSwatch.uncoated;
    // this.http.get('/assets/color-uncoated.json').subscribe((data) => this.colorList = data);
  }

  changeColorCoated() {
    this.colorList = [];
    this.colorList = this.colorSwatch.coated;
    // this.http.get('/assets/color.json').subscribe((data) => this.colorList = data);
  }

  changeColorCMYK() {
    // this.colorList = JSON.parse(color);
    // this.http.get('/assets/color.json').subscribe((data) => this.colorList = data);
  }
}
