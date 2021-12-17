import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-dulces-y-snacks',
  templateUrl: './dulces-y-snacks.page.html',
  styleUrls: ['./dulces-y-snacks.page.scss'],
})
export class DulcesYSnacksPage implements OnInit {
  products: any[];
  user_id: any="1"
  product_type: any="dulces y snacks";
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
