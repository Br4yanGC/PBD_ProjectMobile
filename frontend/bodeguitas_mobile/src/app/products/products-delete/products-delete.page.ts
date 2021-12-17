import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.page.html',
  styleUrls: ['./products-delete.page.scss'],
})
export class ProductsDeletePage implements OnInit {
  product: any;
  product_id: any;
  user_id: any='1';
  product_type: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.product_id = data.get('product_id');
      }
    )
  }
  deleteProduct(id: any) {
    this.productsService.deleteProduct(this.user_id, this.product_id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/products']);
      }
    )
  }


}
