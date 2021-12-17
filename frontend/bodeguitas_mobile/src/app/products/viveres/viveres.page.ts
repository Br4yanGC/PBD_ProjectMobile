import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-viveres',
  templateUrl: './viveres.page.html',
  styleUrls: ['./viveres.page.scss'],
})
export class ViveresPage implements OnInit {
  products: any[];
  user_id: any="1"
  product_type: any="viveres";
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
