import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent  implements OnInit {
  constructor( private registerService : RegisterService , private router : Router , private Route : ActivatedRoute){}

 
  ngOnInit(): void {
    
  }

public register = {
  rid :0 ,
  userName:'',
  email:'',
  password:'',
  phoneno:0,
}
 
public user = {

  password:'',
  confirmpassword:'',
};

forgotPassword() {

     const email = localStorage.getItem('forgotemail')
    if(email){
    
  this.registerService.log(email).subscribe(
    (data)=>{
      alert("Reset password link has beeen send successfully");
      console.log(data);

      this.router.navigate([''])
    }
  )
}
}

formsubmit(){
     if(this.user.password == this.user.confirmpassword && this.user.password != ''){
           const email = localStorage.getItem('forgotemail');
           if(email){
            this.registerService.log(email).subscribe(
              (data)=>{
                this.register=data;
                this.register.password=this.user.password;
                this.registerService.updatereg(this.register.rid , this.register).subscribe(
                  ()=>{
                    alert('Password has been updated succesfully');
                    this.router.navigate(['login'])
                  },
                  (error)=>{
                    console.log(error);
                  }
                )
              }
            )
           }
     }
     else{
      alert("password and conform password shuld be same");
     }
}
}