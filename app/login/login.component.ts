import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService, private registerService : RegisterService , private router : Router) { }
  public user = {
   
    email:'',
    password:'',
  };
  ngOnInit(): void {
  }

  formsubmit(){ 
    if(this.user.email =='Admin@gmail.com'){
      const id =1;
      localStorage.setItem('loginemail', this.user.email);
      localStorage.setItem('loginid' ,id.toString() );
      this.router.navigate(['admin']);
    }
    else{
    this.registerService.log(this.user.email).subscribe(
      (data)=>{  
        if(data==null){
          alert("wrong email");
        } 
        console.log("login details " , data);
            if(data.email == this.user.email ){
              console.log("right email")
              if(data.password == this.user.password){
              alert('login Sucessfull');
            
              localStorage.setItem('loginemail', this.user.email);
              if(data.rid){
              localStorage.setItem('loginid' , data.rid);
              this.router.navigate(['dashboard'])
              }
            }
            else{
              alert("Wrong password");
            }
          }
            else{
              alert("Wrong email");
            }
            

      }
      ,
      (error)=>{
        console.log(error);
        alert('Something went wrong');
      }
    )
  }
  }

  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    
    
    this.email = '';
    this.password = '';

  }

  
 
}
