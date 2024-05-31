import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { RegisterService } from 'src/app/services/register.service';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../user-data.service';
import emailjs , {type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName: string='';
  email : string = '';
  password : string = '';
  phoneno:number=0;
  emailVerified: boolean = false; 

  constructor(private auth : AuthService,private registerService:RegisterService , private http: HttpClient , private router : Router , private userDataService : UserDataService) { }
  public user = {
    userName:'',
    email:'',
    password:'',
    phoneno:0,
  };
  ngOnInit(): void {
  }
  formSubmit(e:Event) {
    
    const userData = this.userDataService.getUserData();
  
    userData.registration=this.user;
    console.log(userData.registration);
    this.registerService.addUser(userData.registration).subscribe(
      (data)=>{
            console.log(data);
            alert('Registration Sucessfull');
            if (data && data.rid) {
              localStorage.setItem('rid', data.rid);
             
            }
            // this.router.navigate(['user_info']);
            // window.location.href = 'http://localhost:8080/register';
            const emailParams = {
              to_name: this.user.userName,
              from_name:"Matrimonial Hub",
              email_id: this.user.email,
              message: 'Registration successful! Welcome to our platform.',
            };
            console.log(e.target as HTMLFormElement);
            emailjs.send('service_ofumwpl' , 'template_5utam5h',emailParams , 'wMVIPTkz1aA4d9xZc')
            .then(
              () =>{
                console.log('Success');
           
              },
              (error)=>{
                console.log(error);
              }
            )
            // emailjs.send()
            this.router.navigate(['user_info']);
}
      ,
      (error)=>{
        console.log(error);
        alert('Something went wrong');
      }
    )
     console.log(userData);
//      localStorage.setItem('userName', this.user.userName);
// localStorage.setItem('email', this.user.email);
// localStorage.setItem('password', this.user.password);
// localStorage.setItem('phoneno', this.user.phoneno.toString());
    //  window.location.href = 'http://localhost:8080/register';
    //  this.router.navigate(['user_info']);

    // this.registerService.addUser(this.user).subscribe(
    //   (data)=>{
    //     console.log(data);
    //     localStorage.setItem('userData', JSON.stringify(data));
       
    
    // this.email = '';
    // this.password = '';

    // // this.emailVerified = true;
    //     alert('Registration Successful');
    //     this.router.navigate(['personal_info'])
    //   },
    //   (error)=>{
    //     console.log(error);
    //     // alert('Something went wrong');
    //   }
    // );
  }
  register() {

    // if(this.email == '') {
    //   alert('Please enter email');
    //   return;
    // }

    // if(this.password == '') {
    //   alert('Please enter password');
    //   return;
    // }
    // if (this.phoneno ==0) {
    //   alert('Please enter phone number');
    //   return;
    // }
  //   this.http.get<any>(`http://localhost:8080/check-email-verification/${this.email}`).subscribe(
  //   (response) => {
  //     // Response received, check if email is verified
  //     if (response && response.emailVerified) {
  //       console.log("Rsponse: " ,response);
  //       this.emailVerified = true;
  //       this.formSubmit(); // Proceed with registration
  //     } else {
  //       // Email is not verified or response format is incorrect
  //       console.error('Email is not verified or invalid response format.');
  //       alert('Email is not verified. Please verify your email.');
  //     }
  //   },
  //   (error) => {
  //     // Error occurred during HTTP request
  //     console.error(error);
  //     alert('Error occurred while checking email verification status.');
  //   }
  // );
    

  }

  redirectToVerification() {
    window.location.href = 'http://localhost:8080/register';
    // Redirect to the specified URL
  }

}
