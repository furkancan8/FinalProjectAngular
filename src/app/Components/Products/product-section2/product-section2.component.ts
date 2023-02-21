import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-section2',
  templateUrl: './product-section2.component.html',
  styleUrls: ['./product-section2.component.css']
})
export class ProductSection2Component implements OnInit{


  constructor() {

  }
  ngOnInit(): void {

  }
  getImageSource():string{
    let url:string = "https://localhost:44331/Uploads/Images/";
    return url;
  }
}
