import { Component, OnInit } from '@angular/core';
import { ProductApiService } from "../../services/product-api.service";
import { ProductEntity } from "../../model/product.entity";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductEntity[] = [];

  constructor(private productService: ProductApiService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: ProductEntity[]) => {
      this.products = data;
    });
  }

  toggleFavorite(product: ProductEntity): void {
    product.isFavorite = !product.isFavorite;
  }
}
