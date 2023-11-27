import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartDetailsComponent } from './cartdetails/cart-details.component';
import { YourprofileComponent } from './yourprofile/yourprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    UpdateprofileComponent,
    ProductsDetailsComponent,
    CartDetailsComponent,
    YourprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
