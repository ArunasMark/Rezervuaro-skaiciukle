import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanduo',
  templateUrl: './vanduo.component.html',
  styleUrls: ['./vanduo.component.less']
})
export class VanduoComponent implements OnInit {
  public talpa:number|null=null;
  public greitis:number|null=null;
  public laikas:number|null=null;
  public rezultatas:number=0;
  public rezultatas2:number=0;



  constructor() { }

  ngOnInit(): void {
  }
  public skaiciuoti(){
    if (this.talpa!=null && this.greitis!=null && this.laikas!=null) {
      this.rezultatas = Number ((((this.greitis * this.laikas) / this.talpa) * 100).toFixed(2));
      this.rezultatas2 = Number ((this.greitis * this.laikas).toFixed(2));
    }
  }





}
