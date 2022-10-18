import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kmi',
  templateUrl: './kmi.component.html',
  styleUrls: ['./kmi.component.less']
})
export class KmiComponent implements OnInit {
public svoris:number|null=null;
public ugis:number|null=null;
public kmi:string|null=null;
  constructor() { }

  ngOnInit(): void {
  }
  public skaiciuoti(){
    if (this.svoris!=null && this.ugis!=null) {
      this.kmi = (this.svoris / (this.ugis / 100) ** 2).toFixed(2);
    }
  }
}
