import { Component, OnInit } from '@angular/core';
import { Envelope } from './envelope';

@Component({
  selector: 'lib-envelope-picker',
  template: `
  <div class="container">
    <div class="col-1">
      <div class="input-group">
        <label>ENVELOPE TYPE &nbsp; | &nbsp; <a class="link" (click)="noEnvelope()">NONE</a></label>
        <input type="text" [value]="envelope"/>
        <label>REMARKS</label>
        <textarea>{{remarks}}</textarea>
      </div>

      <div class="select-envelope" *ngIf="envelope">
        <img width="80px" [src]="selectedEnvelope"/>
      </div>
    </div>

    <div class="row">
      <div  class="envelope" (click)="setEnvelope('Commercial', 'commercial')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="commercial"/>
          <div class="envelope-text"> Commercial </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Window', 'window')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="window"/>
          <div class="envelope-text"> Window </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Booklet', 'booklet')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="booklet"/>
          <div class="envelope-text"> Booklet </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Catalog', 'catalog')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="catalog"/>
          <div class="envelope-text"> Catalog </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Coin', 'coin')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="coin"/>
          <div class="envelope-text"> Coin </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Announcement', 'announcement')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="announcement"/>
          <div class="envelope-text"> Announcement </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Baronial', 'baronial')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="baronial"/>
          <div class="envelope-text"> Baronial </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Policy', 'policy')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="policy"/>
          <div class="envelope-text"> Policy </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Remittance', 'remittance')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="remittance"/>
          <div class="envelope-text"> Remittance </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Oversize', 'oversize')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="oversize"/>
          <div class="envelope-text"> Oversize </div>
        </div>
      </div>

      <div  class="envelope" (click)="setEnvelope('Clasp', 'clasp')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img [src]="clasp"/>
          <div class="envelope-text"> Clasp </div>
        </div>
      </div>

    </div>
  </div>
  `,
  styleUrls: ['envelope-picker.scss']
})
export class EnvelopePickerComponent implements OnInit {
  envelope = '';
  selectedEnvelope = '';
  remarks = '';
  commercial = new Envelope().commercial;
  window = new Envelope().window;
  booklet = new Envelope().booklet;
  catalog = new Envelope().catalog;
  coin = new Envelope().coin;
  announcement = new Envelope().announcement;
  baronial = new Envelope().baronial;
  policy = new Envelope().policy;
  remittance = new Envelope().remittance;
  oversize = new Envelope().oversize;
  clasp = new Envelope().clasp;
  squareFlap = new Envelope().squareFlap;

  constructor() { }

  ngOnInit() {
  }

  setEnvelope(type, img) {
    this.envelope = type;
    this.selectedEnvelope = this[img];

  }

  noEnvelope() {
    this.envelope = '';
    this.selectedEnvelope = '';
  }

}
