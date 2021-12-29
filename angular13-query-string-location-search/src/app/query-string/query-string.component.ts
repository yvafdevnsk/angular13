import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-string',
  templateUrl: './query-string.component.html',
  styleUrls: ['./query-string.component.scss']
})
export class QueryStringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let searchParams: URLSearchParams = new URLSearchParams(window.location.search);

    console.log("window.location=", window.location); // http://localhost:4200/?key1=abc&key2=123
    console.log("window.location.search=", window.location.search); // ?key1=abc&key2=123
    console.log("searchParams=", searchParams); // 中身は出力されない？

    console.log("searchParams.get(key1)=", searchParams.get("key1")); // abc
    console.log("searchParams.get(key2)=", searchParams.get("key2")); // 123
    console.log("searchParams.get(keynotfound)=", searchParams.get("keynotfound")); // keyがない場合はnull
  }

}
