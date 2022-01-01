import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-query-string',
  templateUrl: './query-string.component.html',
  styleUrls: ['./query-string.component.scss']
})
export class QueryStringComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

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

}
