import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { CartDetailsComponent } from './cartdetails/cart-details.component';
import { YourprofileComponent } from './yourprofile/yourprofile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'homepage',component:HomepageComponent},
  {path:'updateprofile',component:UpdateprofileComponent},
  {path:'cartdetails',component:CartDetailsComponent},
  {path:'yourprofile',component:YourprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
