import { Component, ViewEncapsulation } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab2Page {

  constructor(public actionSheetController: ActionSheetController) {}

  async ngOnInit() {
  }

  
}
