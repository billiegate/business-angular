import { Component, OnInit } from '@angular/core';
import Business from '../../../model/business';
import { BusinessService } from '../../../service/business.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: BusinessService) { }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data;
    });
  }

}
