import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-carnes-y-embutidos',
  templateUrl: './carnes-y-embutidos.page.html',
  styleUrls: ['./carnes-y-embutidos.page.scss'],
})
export class CarnesYEmbutidosPage implements OnInit {
  products: any[];
  user_id: any="1"
  product_type: any="carnes y embutidos";
  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsService.getProductsByType(this.user_id, this.product_type).subscribe(data =>{
      this.products = data;
    })
  }

  getPictureUrl(product_image){
    if(product_image.includes("http://") || product_image.includes("https://")){
      return product_image;
    }
    else{
      return 'http://localhost:3000/' + product_image;
    }
  }
}
