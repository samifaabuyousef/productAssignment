import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  name:string;
  quantity:number;
  Price:number;
  Profit:number=0;



  constructor() { }
  Products = [];
  Product = [];

  addProduct(){
    this.Product = [];
    this.Products.push({name :this.name, quantity: this.quantity,Price: this.Price });
       console.log(this.Products);
   
}

sellProduct(){
            
            
  if (this.quantity>0){
  console.log(`Product ${this.name} is availiable and 1 item sold `);
  this.quantity=this.quantity-1;
  this.Profit=this.Profit+this.Price
  console.log(`the remaining of ${this.name} is ${this.quantity}`)
 } else{
    console.log('no items right now');
     }
   

  }


}
