import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-opera-bas',
  templateUrl: './opera-bas.component.html',
  styleUrls: ['./opera-bas.component.css']
})
export class OperaBasComponent implements OnInit {

  num1='';
  resultado:number=0;
  print="";
  text:string[]=[];

  showTabla(){
    let num1:number=parseInt(this.num1);
    let text:string[]=[];
    for(let i=1; i<=10; i++){
      this.resultado=num1 *i;
      text.push(i+"x"+this.num1+"="+this.resultado);

    }this.text=text;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
