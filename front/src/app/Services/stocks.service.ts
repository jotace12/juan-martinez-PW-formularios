import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStocks } from '../Interface/stock';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })
  export class StocksService {
   private urlBase:String = 'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op='
    constructor(private cliente:HttpClient) {}
  
    todos():Observable<IStocks[]>{
      return this.cliente.get<IStocks[]>(this.urlBase + 'todos');
  }
  uno(id:number):Observable<IStocks>{
     var stocks = new FormData();
  
    return this.cliente.post<IStocks>(this.urlBase + 'uno',stocks);
  }
  
  insertar(stock:IStocks):Observable<any>{
    var sto = new FormData();
    sto.append('productoId', stock.ProductoId.toString());
    sto.append('proveedorId', stock.ProveedorId.toString());
    sto.append('cantidad', stock.Cantidad.toString());
    sto.append('precio_Venta', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'insertar', sto);
  
  }
  actualizar(stock:IStocks):Observable<any>{
    var sto = new FormData();
    sto.append('stockId', stock.StockId.toString());
    sto.append('productoId', stock.ProductoId.toString());
    sto.append('proveedorId', stock.ProveedorId.toString());
    sto.append('cantidad', stock.Cantidad.toString());
    sto.append('precio_Venta', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'actualizar', sto);
  }
  eliminar(StockId:number):Observable<any>{
    var sto = new FormData();
    sto.append('stockId', StockId.toString());
    return this.cliente.post(this.urlBase + 'eliminar', sto);
  }
  

  }