import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.page.html',
  styleUrls: ['./products-edit.page.scss'],
})
export class ProductsEditPage implements OnInit {
  product_id: any;
  product: any;
  productForm : FormGroup;
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      product_name: [''],
      product_trademark: [''],
      product_price: [''],
      product_type: [''],
      product_stock: [''],
    })
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.product_id = data.get('product_id');
        this.productsService.getProductByProductId(this.product_id).subscribe(
          response => {
            console.log(response),
            this.product = response;
            this.productForm.patchValue(response);
          },
        )   
      }
    )
  }

  updateProduct(product: any) {
    this.productsService.updateProduct(this.product_id, product).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/products']);
      },
      error => {
        console.error(error);
      }
    )
  }
}
