import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Observable}  from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  public getJSON() : Observable<any>{
    return this.data.get("./assets/data.json");
  }
  constructor(private data : HttpClient) { 
    this.getJSON().subscribe((data: any)=> {
      // console.log(data);
    })
  }
}
