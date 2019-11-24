import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    
  ) {}

  addToCart(product) {
    window.alert("your product has been added");
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }
}
