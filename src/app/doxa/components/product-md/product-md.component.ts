import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Product, ProductApi, ResultApi } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
  selector: 'app-product-md',
  templateUrl: './product-md.component.html',
  styleUrls: ['./product-md.component.scss']
})
export class ProductMdComponent implements OnInit {

  productSearch: string = "";
  producPage: number = 0;

  productDialog: boolean = false;

  productInfo: boolean = false;

  finalForm: boolean = false;

  totalInfo = 0.0;

  products: Product[] = [];

  productDetails :ProductApi = {
    idTarifa:       "",
    idServicio:     "",
    idReferencia:   "",
    descSservicio:  "",
    precio:         "",
    prcIva:         "",
    prcSinIva:      "",
    nomMarca:       "",
    stock:          "",
    precioPromo:    "",
    estado:         "",
    fechaPrecio:    "",
    idUnidad:       "",
    idMarca:        "",
    prefijo:        "",
    aux:            "",
    artConDesXCant: "",
    stockDispo:     "",
    descMax:        "",
    conNoticia:     "",
  };

  productsApi: ProductApi[] = []

  resultApi: ResultApi = {};

  productsSh: ProductApi[] = [];

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
    this.productService.getProductsApi("", 0).then(data => {
      console.log(data.data)
      this.productsApi = data.data;
      console.error(this.productsApi);
    }
    );

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
    // dv.filter((event.target as HTMLInputElement).value);
    if ((event.target as HTMLInputElement).value.length >= 4 || (event.target as HTMLInputElement).value.length == 0) {
      this.producPage = 0;
      this.productSearch = (event.target as HTMLInputElement).value;
      this.updateTable();
    }
  }

  changueLeft() {
    this.producPage = (this.producPage == 0) ? 0 : this.producPage - 1;
    this.updateTable();

  }

  changueRigth() {
    this.producPage = this.producPage + 1;
    this.updateTable();
  }

  infoButton(product : ProductApi) {
    this.productDetails=product;
    
  }

  updateTable() {
    this.productService.getProductsApi(this.productSearch, this.producPage).then(data => {
      // console.log(data.data)
      this.productsApi = data.data;
      
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      // console.error(this.productsApi);
    }
    );
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
      if (element.idServicio == event.idServicio) {
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
      (item) => item.idServicio !== product.idServicio
    )
    this.totalProduct();
  }

  totalProduct() {
    this.totalInfo = 0.0;

    this.productsSh.forEach(element => {
      this.totalInfo += ( element.precio) ? parseFloat(element.precio) : 0.0;
    });
  }

  endShoope() {
    console.log('Si se puede finalizar');
  }

}
