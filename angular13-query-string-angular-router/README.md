# Angular Routerを使ってQuery Stringを取得する

- node v16.13.1 (npm v8.1.2)
- Angular CLI 13.1.2
- Google Chrome 96

## サンプルコード

```
ngOnInit(): void {
  // ActivatedRoute.queryParamMap.subscribe()すると、
  // 1回目は空のObject、2回目はQuery Stringが設定されたObjectになる。
  // NavigationEndイベントまで待てば回避できる。
  
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(event => {
    let initialParams: ParamMap = this.route.snapshot.queryParamMap;
    
    console.log("initialParams.get(key1)=", initialParams.get("key1")); // abc
    console.log("initialParams.get(key2)=", initialParams.get("key2")); // 123
    console.log("initialParams.get(keynotfound)=", initialParams.get("keynotfound")); // keyがない場合はnull
  });
}
```
