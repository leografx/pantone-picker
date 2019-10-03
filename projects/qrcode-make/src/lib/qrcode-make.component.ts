import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'lib-qrcode-make',
  template: `
  <img [src]="qr"/>
  `,
  styles: []
})
export class QrcodeMakeComponent implements OnInit {

  qr;

  constructor() {
    QRCode.toDataURL('http://google.com')
      .then(url => {
        this.qr = url;
        console.log(url)
      })
      .catch(err => {
        console.error(err)
      })
  }

  ngOnInit() {
  }

}
