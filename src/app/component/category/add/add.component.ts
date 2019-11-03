import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
