import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products = [
    { name: 'vivo', type: 'phone' },
    { name: 'dell', type: 'laptop' },
    { name: 'lenovo', type: 'laptop' },
    { name: 'oppo', type: 'phone' },
    { name: 'hp', type: 'laptop' }
  ];
  defaultProducts = this.products;
  type: any;

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.type = params['type'];
      if (this.type) {
        this.products = this.defaultProducts.filter(product => product.type === this.type);
      } else {
        this.products = this.defaultProducts;
      }
    });
  }
}
