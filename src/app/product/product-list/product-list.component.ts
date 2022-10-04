import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  constructor() { }

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  ngOnInit(): void {
  }

  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":' puerta familiar',
      "year":"Febrero 3 2020",
      "Precio":120000,
      "Marca":"NISSAN",
      "Color":"Azul",
      "imagenUrl":"httpsimg.remediosdigitales.com/453ca3/nissan-sentra-2020-portada/1366_2000.jpg"
    },

    {
      "productoId":2,
      "Modelo":'A4',
      "Descripcion":' puerta familiar',
      "year":"Febrero 3 2021",
      "Precio":120000,
      "Marca":"AUDI",
      "Color":"Gris",
      "imagenUrl":"https://hips.hearstapps.com/hmg-prod/images/2020-audi-a4-limousine-sedan-euro-spec-107-1557895726.jpg"
    },
    
    {
      "productoId":3,
      "Modelo":'Rio',
      "Descripcion":' puerta familiar',
      "year":"Febrero 3 2021",
      "Precio":120000,
      "Marca":"KIA",
      "Color":"Gris",
      "imagenUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2018_Kia_Rio_EX_-_Side.jpg/1200px-2018_Kia_Rio_EX_-_Side.jpg"
    }
  ]

}
