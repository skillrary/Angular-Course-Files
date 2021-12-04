import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: {
    id: number;
    name: string;
    category: string;
    description: string;
    images: string[];
  }[] = [];
  constructor(
    private productService: ProductService
  ) {
    this.products = this.productService.getProduct;
  }

  ngOnInit(): void {
  }

}
