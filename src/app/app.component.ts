import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { R3TargetBinder } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'color';
  colorList;
  colors = [];
  colorLabel = { rgb: "", Name: "" };

  constructor(private http: HttpClient) {
    this.http.get('/assets/color.json').subscribe((data) => this.colorList = data);
  }

  setColor(color) {
    this.colorLabel.rgb = color.red;
    this.colorLabel.rgb += ', ';
    this.colorLabel.rgb += color.green;
    this.colorLabel.rgb += ', ';
    this.colorLabel.rgb += color.blue;
  }

  getColor(color: string) {
    console.log(color);
    this.colorList.filter((data) => data.Name === 'PANTONE ' + color + ' C').map(data => {
      this.colorLabel = data;
      this.setColor(data);
      this.colors.push(this.colorLabel);
    });

  }
}
