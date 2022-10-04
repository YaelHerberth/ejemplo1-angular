import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  nombre: string = "";
  compradores: number = 0;
  ticketsNum: number = 0;
  validacionToF: String = "";
  tarjeta: boolean = false;
  descuento: number = 0;
  descuento2: number = 0;
  ticketPrecio: number = 12;
  total: number = 0;
  compraext: boolean = false;
  error: boolean = false;



  cinecoResult(result: boolean): void {
    this.tarjeta = result;
  }

  calculo(): void {

    if (this.ticketsNum > 5) {
      this.descuento = 0.85;
    } else if (this.ticketsNum >= 3 && this.ticketsNum <= 5) {
      this.descuento = 0.90;
    } else {
      this.descuento = 0;
    }
    if (this.tarjeta == true) {
      this.descuento2 = 0.90;
    }
    else {
      this.descuento2 = 0;
    }


    if (this.ticketsNum <= (this.compradores * 7)) {
      this.total = this.ticketPrecio * this.ticketsNum
      this.compraext = true;
      this.error = false;;
      if (this.descuento != 0) {
        this.total = this.descuento * this.total;
      }

    } else {
      this.error = true;
      this.compraext = false;
      this.total =0;
    }

    
    if (this.descuento2 != 0) {
      this.total = this.descuento2 * this.total;
    }
  }

  constructor(){ }
  ngOnInit(): void {
  }
}