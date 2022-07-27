import { Component, OnInit } from '@angular/core';
import { CusService } from 'src/app/service/employees/cus.service';
import { CustomerDet } from '../customer-det';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  cusList: CustomerDet[] = [];

  constructor(private CustomerService: CusService) { }

  ngOnInit(): void {
    this.CustomerService.getCustomersList().subscribe((data: CustomerDet[]) => {
      console.log(data);
      this.cusList = data;
    });
  }
}
