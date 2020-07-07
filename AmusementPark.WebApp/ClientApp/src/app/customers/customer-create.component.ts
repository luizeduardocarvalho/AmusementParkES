import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { ICustomer } from './customer';
import { CustomerService } from './customer.serivce';
import { delay } from 'rxjs/operators';

@Component({
  templateUrl: './customer-create.component.html'
})
export class CustomerCreateComponent implements OnInit {
  pageTitle: string = 'Register';
  customer: ICustomer;
  productInfo = new FormControl('');
  name: string;
  age: number;
  cpf: string;
  email: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService) { }

  ngOnInit(): void {    
  }

  onBack(): void {    
    this.router.navigate(['/customers']);
  }

  onSubmit(): void {
    this.customer = {
      "name": this.name,
      "age":  this.age,
      "cpf": this.cpf,
      "email": this.email
    }

    this.customerService
      .addCustomer(this.customer)
      .subscribe();

    this.onBack();
  }
}
