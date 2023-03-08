import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  productDialog: boolean = false;

  productInfo: boolean = false;

  finalForm: boolean = false;

  totalInfo = 0.0;

  products: Product[] = [];

  productsSh: Product[] = [];

  tieredItems: MenuItem[] = [];

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);

    this.sourceCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' }];

    this.targetCities = [];

    this.orderCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' }];

    this.sortOptions = [
      { label: 'Mayor a menor', value: '!price' },
      { label: 'Menor a mayor', value: 'price' }
    ];
  }

  onSortChange(event: any) {
    const value = event.value;

    this.totalProduct();

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
  }
  openNew() {
    // this.product = {};
    // this.submitted = false;
    this.productDialog = true;
  }

  openInfo() {
    // this.product = {};
    // this.submitted = false;
    this.productInfo = true;
  }


  total(): number {
    return this.products.reduce((acc, product) => acc + ((product.price != null) ? product.price : 0, 0) * ((product.quantity != null) ? product.quantity : 0, 0), 0);
  }

  addShoppe(event: any) {
    var searching = false;

    this.productsSh.forEach(element => {
      if (element.id == event.id) {
        searching = true;
      }
    });

    if (!searching) {
      this.productsSh.push(event);
    }

    console.log(this.productsSh);
    this.totalProduct();
  }

  deleteProduct(product: any) {

    this.productsSh = this.productsSh.filter(
      (item) => item.id !== product.id
    )
    this.totalProduct();
  }

  totalProduct() {
    this.totalInfo = 0.0;

    this.productsSh.forEach(element => {
      this.totalInfo += (element.price) ? element.price : 0.0;
    }); 
  }

  endShoope(){
    console.log('Si se puede finalizar');
  }

}