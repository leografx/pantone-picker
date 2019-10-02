import { Component, OnInit } from '@angular/core';
import { Folds } from './folds';

@Component({
  selector: 'lib-fold-picker',
  template: `
  <div class="container">
    <div class="col-1">
      <div class="input-group">
        <label>FOLD TYPE &nbsp; | &nbsp; <a class="link" (click)="noFold()">NONE</a></label>
        <input type="text" [value]="fold"/>
        <label>REMARKS</label>
        <textarea>{{remarks}}</textarea>
      </div>

      <div class="select-fold" *ngIf="fold">
        <img height="100px" [src]="selectedFold"/>
      </div>
    </div>
    <div class="row">
      <div  class="fold" (click)="setFold('Half', 'half')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="half"/>
          <div class="fold-text"> Half </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('Double Parallel', 'doubleParallel')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="doubleParallel"/>
          <div class="fold-text"> Double Parallel </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('Gate', 'gate')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="gate"/>
          <div class="fold-text"> Gate </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('Close Gate', 'closeGate')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="closeGate"/>
          <div class="fold-text"> Close Gate </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('6 Page Accordion', 'sixPageAccordion')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="sixPageAccordion"/>
          <div class="fold-text"> 6 Page Accordion </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('6 Page Roll', 'sixPageRoll')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="sixPageRoll"/>
          <div class="fold-text"> 6 Page Roll </div>
        </div>
      </div>

      <div class="fold" (click)="setFold('8 Page Accordion', 'eightPageAccordion')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="eightPageAccordion"/>
          <div class="fold-text"> 8 Page Accordion </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('8 Page Roll', 'eightPageRoll')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="eightPageRoll"/>
          <div class="fold-text"> 8 Page Roll </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('8 Page French', 'eightPageFrench')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="eightPageFrench"/>
          <div class="fold-text"> 8 Page French </div>
        </div>
      </div>

      <div class="fold" (click)="setFold('8 Page Map', 'eightPageMap')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="eightPageMap"/>
          <div class="fold-text"> 8 Page Map </div>
        </div>
      </div>

      <div class="fold" (click)="setFold('8 Page Reverse Map', 'eightPageReverseMap')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="eightPageReverseMap"/>
          <div class="fold-text"> 8 Page Reverse Map </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('10 Page Accordion', 'tenPageAccordion')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="tenPageAccordion"/>
          <div class="fold-text"> 10 Page Accordion </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('10 Page Roll', 'tenPageRoll')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="tenPageRoll"/>
          <div class="fold-text"> 10 Page Roll </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('10 Page Parallel', 'tenPageParallel')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="tenPageParallel"/>
          <div class="fold-text"> 10 Page Parallel </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('12 Page Accordion', 'twelvePageAccordion')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="twelvePageAccordion"/>
          <div class="fold-text"> 12 Page Accordion </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('12 Page Roll', 'twelvePageRoll')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="twelvePageRoll"/>
          <div class="fold-text"> 12 Page Roll </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('16 Page Broad', 'sixteenPageBroad')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="sixteenPageBroad"/>
          <div class="fold-text"> 16 Page Broad </div>
        </div>
      </div>

      <div  class="fold" (click)="setFold('16 Page Parallel', 'sixteenPageParallel')" style="width:130px; height:100px; display:inline-block;">
        <div style="text-align:center;">
          <img height="100px" [src]="sixteenPageParallel"/>
          <div class="fold-text"> 16 Page Parallel </div>
        </div>
      </div>

    </div>
  </div>
  `,
  styleUrls: ['fold-picker.scss']
})
export class FoldPickerComponent implements OnInit {
  fold = '';
  remarks = '';
  selectedFold = '';
  sixPageAccordion = new Folds().sixPageAccordion;
  sixPageRoll = new Folds().sixPageRoll;
  eightPageAccordion = new Folds().eigthPageAccordion;
  eightPageFrench = new Folds().eightPageFrench;
  eightPageMap = new Folds().eightPageMap;
  eightPageReverseMap = new Folds().eightPageReverseMap;
  eightPageRoll = new Folds().eightPageRoll;
  tenPageAccordion = new Folds().twelvePageAccordion;
  tenPageParallel = new Folds().tenPageParallel;
  tenPageRoll = new Folds().tenPageRoll;
  twelvePageAccordion = new Folds().twelvePageAccordion;
  twelvePageRoll = new Folds().twelvePageRoll;
  sixteenPageBroad = new Folds().sixteenPageBroad;
  sixteenPageParallel = new Folds().sixteenPageParallel;
  closeGate = new Folds().closeGate;
  doubleParallel = new Folds().doubleParallel;
  gate = new Folds().gate;
  half = new Folds().half;

  constructor() { }

  ngOnInit() {
  }

  setFold(type, img) {
    this.fold = type;
    this.selectedFold = this[img];
  }

  noFold() {
    this.fold = '';
    this.selectedFold = '';
  }

}
