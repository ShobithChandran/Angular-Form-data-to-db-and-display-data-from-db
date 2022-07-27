import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDet } from 'src/app/customer-det';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CusService {
  apiUrl="http://localhost:3000/customers"
  
  
  constructor(private http: HttpClient) { }

  //function to take date from form
  saveCustomer(cus: CustomerDet): void{
    console.log("Cus Service save customer method called service called...")
    console.log('Name',cus.Name);
    console.log('Email', cus.Email);
    console.log('Message', cus.Message);
  }

  //function to register new customer into the db.json
  registerNewEmployee(cus: CustomerDet): Observable<any> {
    return this.http.post(this.apiUrl,cus);
  }

  getCustomersList(): Observable<any> {
    console.log("service get this.getCustomersList");
     return this.http.get('http://localhost:3000/customers');
   }

}
