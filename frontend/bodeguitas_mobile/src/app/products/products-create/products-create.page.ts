import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';
import { PhotoService } from 'src/app/_services/photo.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.page.html',
  styleUrls: ['./products-create.page.scss'],
})
export class ProductsCreatePage implements OnInit {
  productForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private photoService: PhotoService
  ) { 
    this.productForm= this.formBuilder.group({
      product_name: [''],
      product_trademark: [''],
      product_price: [''],
      product_type: [''],
      product_stock: [''],
      product_image: [''],
      user_id: 1
    })
  }
    
  ngOnInit() {
  }

  addProduct(values: any) {
    this.productsService.insertProduct(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/products'])
      },
      error => {
        console.error(error)
      }
    )
  }

  async openCamera(){
    const picture_data = await this.photoService.takePicture();
    this.productForm.patchValue(picture_data);
  }
}
