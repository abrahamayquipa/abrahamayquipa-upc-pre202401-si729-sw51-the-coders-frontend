import { Component } from '@angular/core';
import {Order} from "../../model/order.entity";
import {OrdersService} from "../../services/orders.service";
import { DataSource } from '@angular/cdk/table';
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-order-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class OrderTableComponent {
  title:string = 'Orders';
  orders: Order[] = [];
  displayedColumns: string[] = ['title', 'description', 'id','entry','exit','status'];
  dataSource: MatTableDataSource<Order>=new MatTableDataSource<Order>(this.orders);
  constructor(private orderApiService: OrdersService) {
    this.orderApiService.getOrders().subscribe((data: any) => {
      this.orders = data;
      console.log(data);
      this.dataSource = new MatTableDataSource<Order>(this.orders);

    });
  }

}
