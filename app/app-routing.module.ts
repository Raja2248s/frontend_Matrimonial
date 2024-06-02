import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { InfoComponent } from './info/info.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FamilyInfoComponent } from './family-info/family-info.component';
import { EduInfoComponent } from './edu-info/edu-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminComponent } from './admin/admin.component';
import { DetailsComponent } from './details/details.component';
import { UpdateUserInfoComponent } from 'src/update-user-info/update-user-info.component';
import { UpdatePersonalInfoComponent } from 'src/update-personal-info/update-personal-info.component';
import { UpdateFamilyInfoComponent } from 'src/update-family-info/update-family-info.component';
import { UpdateEducationInfoComponent } from 'src/update-education-info/update-education-info.component';
import { PhotoGalleryComponent } from 'src/photo-gallery/photo-gallery.component';
import { UserdeatailsComponent } from './userdeatails/userdeatails.component';
import { FooterComponent } from './footer/footer.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MessageComponent } from './message/message.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
   {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent , canActivate:[authGuard]},
  {path: 'register', component : RegisterComponent },
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path : 'file-upload', component:FileuploadComponent},
  {path:'all_profiles',component:AllProfilesComponent},
  {path:'info',component:InfoComponent},
  {path:'profile_details',component:ProfileDetailsComponent},
  {path:'user_profile',component:UserProfileComponent},
  {path:'personal_info',component:PersonalInfoComponent},
  {path:'family_info',component:FamilyInfoComponent},
  {path:'edu_info',component:EduInfoComponent},
  {path:'user_info' , component:UserInfoComponent},
  {path:'home' , component:HomeComponent},
  {path:"reset" , component:ResetPasswordComponent},
  {path:"admin" , component:AdminComponent , canActivate:[authGuard]},
  {path:"details" , component:DetailsComponent , canActivate:[authGuard]},  
  {path:"update-user-info" , component:UpdateUserInfoComponent , canActivate:[authGuard]},
  {path:"update-personal-info" , component:UpdatePersonalInfoComponent , canActivate:[authGuard]},
  {path:"update-family-info" , component:UpdateFamilyInfoComponent , canActivate:[authGuard]},
  {path:"update-education-info" , component:UpdateEducationInfoComponent , canActivate:[authGuard]},
  {path:'photo-gallery' , component:PhotoGalleryComponent , canActivate:[authGuard]},
  {path:'userdetails' , component:UserdeatailsComponent , canActivate:[authGuard]},
  {path:'footer',  component:FooterComponent},
  {path:'match-details' , component:MatchDetailsComponent , canActivate:[authGuard]},
  {path:'message' , component:MessageComponent},
  {path:'about' , component:AboutComponent , canActivate:[authGuard]},
  {path:'contact' , component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


