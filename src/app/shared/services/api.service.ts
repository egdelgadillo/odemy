import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  serviceName: string;

  constructor(private http: HttpClient) {}

  public async getAll(): Promise<T[]> {
    return this.http
      .get<T[]>(`${environment.api.rootUrl}/${this.serviceName}`)
      .toPromise();
  }
}
