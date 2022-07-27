import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CusService } from 'src/app/service/employees/cus.service';
import { CustomerDet } from '../customer-det';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  myForm!: FormGroup;

  cus: CustomerDet = new CustomerDet();

  cusList: CustomerDet[] = [];

  constructor(private CustomerService: CusService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      Name: new FormControl(''),
      Email: new FormControl(''),
      Message: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    this.cus.Name = form.value.Name;
    this.cus.Email = form.value.Email;
    this.cus.Message = form.value.Message;
    //to display data in console
    this.CustomerService.saveCustomer(this.cus);
    // this.myForm.reset();

    //to save data in db
    this.CustomerService.registerNewEmployee(form.value).subscribe((cus) => {
      console.log("Employee details saved successfully");
    });

    //to display the list again
    this.CustomerService.getCustomersList().subscribe((data: CustomerDet[]) => {
      console.log(data);
      this.cusList = data;
    });
  }
}
