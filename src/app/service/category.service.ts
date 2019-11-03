import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:String = 'http://localhost:4000/category';

  constructor(private http: HttpClient) { 

  }

  getCategory() {
    return this.http.get(`${this.url}`);
  }

  addCategory(name) {
    this.http.post(`${this.url}/category/add`, {name:name})
    .subscribe( res => console.log(res) )
  }
}
