import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../../../service/business.service';
import Category from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  angForm: FormGroup;
  categories: Category[];

  constructor(private fb: FormBuilder, private bs: BusinessService, private cs: CategoryService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      business_name: ['', Validators.required ],
      category: ['', Validators.required],
      description: ['', Validators.required ],
      email: ['', Validators.required],
      business_phone_number: ['', Validators.required ],
      website: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  addBusiness(business_name, category, description, email, website, business_phone_number, address) {
    this.bs.addBusiness(business_name, category, description, email, website, business_phone_number, address);
  }


  ngOnInit() {
    this.cs
      .getCategory()
      .subscribe((data: Category[]) => {
        this.categories = data;
    });
  }

}
