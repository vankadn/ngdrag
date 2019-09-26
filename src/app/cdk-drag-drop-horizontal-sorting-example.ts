import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop horizontal sorting
 */
@Component({
  selector: 'cdk-drag-drop-horizontal-sorting-example',
  templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
  styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
})
export class CdkDragDropHorizontalSortingExample {
  timePeriods = [
    { periord: 'A', year: '1100', ruler: '1000000240-10', dynasty: 'P&G Final Cust', pack: 'Pack A', coreType:'NR' },
    { periord: 'A', year: '1100', ruler: '1000000240-10', dynasty: 'P&G Final Cust', pack: 'Pack A', coreType:'NR' },
    { periord: 'A', year: '1100', ruler: '1000000240-10', dynasty: 'P&G Final Cust', pack: 'Pack A', coreType:'NR' },
    { periord: 'A', year: '1100', ruler: '1000000240-10', dynasty: 'P&G Final Cust', pack: 'Pack A', coreType:'NR' },
    { periord: 'A', year: '1100', ruler: '1000000240-10', dynasty: 'P&G Final Cust', pack: 'Pack A', coreType:'NR' },
    { periord: 'A', year: '1100', ruler: '1000000240-10', dynasty: 'P&G Final Cust', pack: 'Pack A', coreType:'NR' },
      { periord: 'Z', year: '1100', ruler: 'NCWGHBUTT', dynasty: 'NC Order', pack: '   ', coreType: 'NR'},

  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */