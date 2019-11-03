import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';
import Category from 'src/app/model/category';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrls: ['./list-cat.component.css']
})
export class ListCatComponent implements OnInit {

  categories: Category[];

  constructor(private cs: CategoryService) { }

  ngOnInit() {
    this.cs
      .getCategory()
      .subscribe((data: Category[]) => {
        this.categories = data;
    });
  }

}
