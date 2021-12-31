# window.location.searchとURLSearchParamsを使ってQuery Stringを取得する

- node v16.13.1 (npm v8.1.2)  
- Angular CLI 13.1.2  
- Google Chrome 96

## サンプルコード

```
ngOnInit(): void {
  let searchParams: URLSearchParams = new URLSearchParams(window.location.search);
  
  console.log("window.location=", window.location); // http://localhost:4200/?key1=abc&key2=123
  console.log("window.location.search=", window.location.search); // ?key1=abc&key2=123
  
  console.log("searchParams.get(key1)=", searchParams.get("key1")); // abc
  console.log("searchParams.get(key2)=", searchParams.get("key2")); // 123
  console.log("searchParams.get(keynotfound)=", searchParams.get("keynotfound")); // keyがない場合はnull
}
```
