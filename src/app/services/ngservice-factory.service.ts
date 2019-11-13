import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NgserviceFactoryService {

  constructor() {
    
  }
  public conditionalLoad() {
    return new Promise((resolve) => {
      //Complex Login Logic
      setTimeout(()=>{
        resolve(true);
      },3000)
    });
  }
}
