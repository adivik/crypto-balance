import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  res:any;
  rec:number;
  bal:number;
  address:string;
  sent:number;
  tno:number;
  isClicked:boolean;
  constructor(private http : HttpClient){
    this.bal=0;
    this.address="";
    this.sent=0;
    this.rec=0;
    this.tno=0;
    this.isClicked=false;
    
  } 

  CheckBal(address:string){
    this.isClicked=true;

    this.http.get(`https://api.blockcypher.com/v1/btc/main/addrs/${address}`)
    .subscribe(Response => {
    console.log(Response)
      this.res=Response;
      this.bal=this.res.balance;
      this.sent=this.res.total_sent;
      this.rec=this.res.total_received;
      this.tno=this.res.n_tx;
      

    });
  }
}


