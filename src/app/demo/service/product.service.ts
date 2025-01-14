import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ResultApi } from '../api/product';

@Injectable()
export class ProductService {
    

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsApi(detalles: string,page:number) {

        const data = JSON.stringify({
            "idSede": "",
            "idTarifa": "",
            "idGrupoBdg": "",
            "codReferencia": "",
            "marca": "",
            "descripcion": detalles,
            "categoria": "",
            "skip": page,
            "take": 12
        });

        const options = {
            method: 'POST',
            headers: { accept: '*/*', 'Content-Type': 'application/json' },
            body: data
        };

        return fetch('https://localhost:7196/api/Servicio/ServiciosList', options)
            .then(response => response.json())
            .then(response =>response.result)
            .catch(err => console.error(err));

    }

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }
}
