import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './component/business/add/add.component';
import { EditComponent } from './component/business/edit/edit.component';
import { ListComponent } from './component/business/list/list.component';
import { AddCatComponent as AddCat } from './component/category/add-cat/add-cat.component';
import { ListCatComponent as ListCat } from './component/category/list-cat/list-cat.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BusinessService } from './service/business.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCatComponent } from './component/category/add-cat/add-cat.component';
import { ListCatComponent } from './component/category/list-cat/list-cat.component';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    AddCat,
    ListCat,
    AddCatComponent,
    ListCatComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BusinessService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
