import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'lib-qrcode-make',
  template: `
  <img [src]="qr"/>
  `,
  styles: []
})
export class QrcodeMakeComponent implements OnInit {
  @Input() message = 'http://google.com';
  @Output() image = new EventEmitter();
  qr;

  constructor() {

  }

  ngOnInit() {
    QRCode.toDataURL(this.message)
      .then(url => {
        this.qr = url;
        this.image.emit(url);
        // console.log(url);
      })
      .catch(err => {
        console.error(err)
      })
  }

}
