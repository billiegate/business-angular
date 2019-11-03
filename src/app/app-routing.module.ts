import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent as AddBiz } from './component/business/add/add.component';
import { EditComponent } from './component/business/edit/edit.component';
import { ListComponent as ListBiz } from './component/business/list/list.component';
// import { AddComponent as AddCat } from './component/category/add/add.component';
// import { ListComponent as ListCat } from './component/category/list/list.component';
import { AddCatComponent } from './component/category/add-cat/add-cat.component';
import { ListCatComponent } from './component/category/list-cat/list-cat.component';


const routes: Routes = [
  {
    path: 'business/create',
    component: AddBiz
  },
  {
    path: 'business/edit/:id',
    component: EditComponent
  },
  {
    path: 'business',
    component: ListBiz
  },
  {
    path: 'category/create',
    component: AddCatComponent
  },
  {
    path: 'category',
    component: ListCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
