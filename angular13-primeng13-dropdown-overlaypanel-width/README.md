# Angular13とPrimeNG13でDropdownのoverlay panelをitemの幅に沿って広げる

- node v16.13.2 (npm v8.1.2)
- Angular CLI 13.2.2
- Google Chrome 98
- PrimeNG 13.1.0
- PrimeIcons 5.0.0

## サンプルコード

src/app/app.component.html
```
<p-dropdown [options]="items" [style]="{'width':'200px'}"></p-dropdown>
```

src/app/app.component.ts
```
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
```

## 実行結果

PrimeNGのバージョン13ではDropdownのoverlay panelはitemの幅に沿って広がるので何もしなくてよい。

![kankore11](https://user-images.githubusercontent.com/10959860/154802313-862cc4c1-3d6f-49a5-b5cf-c02c36948e12.png)
