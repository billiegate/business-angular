import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CategoryService } from '../../../service/category.service'

@Component({
  selector: 'app-add',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  catForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: CategoryService) {
    this.createForm();
  }

  createForm() {
    this.catForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  addCategory(name) {
    this.cs.addCategory(name);
  }

  ngOnInit() {
  }

}
