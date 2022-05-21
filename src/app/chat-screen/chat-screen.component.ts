import { Component, OnInit } from '@angular/core';
import {PaymentDetailsService} from '../payment-details.service'


@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit {

  public data  =[{
    id : "",
    date : "",
    amount : "",
    tr_id : "",
    status : ""
  }]

  constructor(private ele : PaymentDetailsService) { }

  ngOnInit(): void {
    this.ele.getJSON().subscribe(res => {
      this.data = res
    })
  }

}
