
import emailjs , {type EmailJSResponseStatus } from '@emailjs/browser';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email : string = '';

  constructor(private auth : AuthService , private registerService : RegisterService , private router : Router) {  }

  ngOnInit(): void {

  }

  public user = {

    email:'',
  }

  forgotPassword() {
      
    this.registerService.log(this.user.email).subscribe(
      (data)=>{
        if(data==null){
          alert("Email is not registered");
        }
        else{
              
              localStorage.setItem('forgotemail' , this.user.email);
              const emailParams = {
                to_name: this.email,
                from_name:"Matrimonial Hub",
                email_id: this.user.email,
                message: 'Registration successful! Welcome to our platform.',
              };
              emailjs.send('service_ofumwpl' ,'template_kn5p8l4' , emailParams  ,'wMVIPTkz1aA4d9xZc' ).then(
                ()=>{
                  alert("reset email link has been sent sucessfully");
                },
                (error )=>{
                  console.log(error);
                }
              )
              this.router.navigate(['login']);
        }

       
      }
    )
  }

}
