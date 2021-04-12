import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { BodyComponent } from './body/body.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [{path:'',component:BodyComponent},
  {path:'admin',component:AdminComponent},
{path:'signin',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'volunteer',component:VolunteerComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
