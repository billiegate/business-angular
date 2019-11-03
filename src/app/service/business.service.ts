import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(business_name, category, description, email, website, business_phone_number, address) {
    const obj = {
      business_name: business_name,
      category: category,
      description: description,
      email: email,
      website: website,
      business_phone_number: business_phone_number,
      address: address
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this.http.get(`${this.uri}`);
  }

  editBusiness(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }
  
  updateBusiness(person_name, business_name, business_gst_number, id) {

      const obj = {
          person_name: person_name,
          business_name: business_name,
          business_gst_number: business_gst_number
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  deleteBusiness(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
