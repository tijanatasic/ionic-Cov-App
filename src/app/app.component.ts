import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController) {}

  openUser() {
    this.menu.enable(true, 'firstMenu');
    this.menu.open('firstMenu');
  }

  openAdmin() {
    this.menu.enable(true, 'secondMenu');
    this.menu.open('secondMenu');
  }

}
