import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import {HttpModule} from '@angular/http';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'contact', component: ContactComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProductsComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
