import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
products: any;
  constructor(private fakestore: ProductService){}

  ngOnInit() {
      this.fakestore.getAllProducts().subscribe((res:any) =>{
        this.products=res;
        console.table(this.products);
      });
  }

}
