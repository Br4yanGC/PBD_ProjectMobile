import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.page.html',
  styleUrls: ['./products-view.page.scss'],
})
export class ProductsViewPage implements OnInit {
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const product_id = data.get('product_id');
        this.productsService.getProductByProductId(product_id).subscribe(
          response => {
            console.log(response);
            this.product = response;
          },
          error => {
            console.error(error);
          }
        )
      }
    )
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
