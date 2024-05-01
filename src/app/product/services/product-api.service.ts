import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends BaseService {
  private productsUrl = `${this.baseUrl}/products`;

  constructor(http: HttpClient) {
    super(http);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }
}
