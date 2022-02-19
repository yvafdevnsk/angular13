import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[];

  constructor() {
    this.items = [
      {label:"あいうえお", value:"1"},
      {label:"あいうえおかきくけこ", value:"2"},
      {label:"あいうえおかきくけこさしすせそ", value:"3"},
      {label:"あいうえおかきくけこさしすせそたちつてと", value:"4"},
    ];
  }
}
