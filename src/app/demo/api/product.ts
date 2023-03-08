interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: InventoryStatus;
    category?: string;
    image?: string;
    rating?: number;
}

export interface ProductApi {
    idTarifa:       string;
    idServicio:     string;
    idReferencia:   string;
    descSservicio:  string;
    precio:         string;
    prcIva:         string;
    prcSinIva:      string;
    nomMarca:       string;
    stock:          string;
    precioPromo:    string;
    estado:         string;
    fechaPrecio:    string;
    idUnidad:       string;
    idMarca:        string;
    prefijo:        string;
    aux:            string;
    artConDesXCant: string;
    stockDispo:     string;
    descMax:        string;
    conNoticia:     string;
}

export interface ResultApi{
    success?: boolean,
    errorMessage?:string,
    data?:any[]
}