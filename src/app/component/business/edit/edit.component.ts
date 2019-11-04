import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../../../service/business.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
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

  updateBusiness(business_name, category, description, email, website, business_phone_number, address) {
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(business_name, category, description, email, website, business_phone_number, address, params['id']);
      this.router.navigate(['business']);
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editBusiness(params['id']).subscribe(res => {
          this.business = res;
      });
    });
  }

}
