import { Injectable, Predicate } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustompreloadstartegyService implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload'])
    {
      return fn();
    }
    else{
      return of(null);
    }
  }

  constructor() { }
}
