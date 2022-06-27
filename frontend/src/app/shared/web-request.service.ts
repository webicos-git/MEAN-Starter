import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(
    private http: HttpClient
  ) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }

  getPostById(uri: string, id: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}/${id}`)
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object,id:string) {
    return this.http.patch(`${this.ROOT_URL}/${uri}/${id}`, payload);
  }

  delete(uri: string, id: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}/${id}`)
  }
}
