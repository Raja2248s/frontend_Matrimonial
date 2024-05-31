
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import emailjs , {type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: string = '';

  constructor(private registerService : RegisterService){

  }
  
  public user ={
    to : 0,
    form:0 , 
    rid:0 ,
    message:''
  }

  public register={
    email :'',
    userName:'',
  }

  ngOnInit(): void {
    
   const ridString = localStorage.getItem('loginid');
   const toString = sessionStorage.getItem('details');
   if (ridString && toString) {
    this.user.rid = parseInt(ridString, 10);
    this.user.to = parseInt(toString, 10);
    this.user.form=parseInt(ridString, 10);
    this.registerService.getRegistrationinfobyid(parseInt(ridString, 10)).subscribe(
      (data)=>{
           this.register=data;
      }
    )
  }
  }
  sendMessage() {



    if (this.user.message.trim().length > 0) {
      this.registerService.addMessage(this.user).subscribe(
       ()=>{
        this.user.message='';
        const emailParams = {
          to_name: "user",
          from_name:"Matrimonial Hub",
          email_id: this.register.email,
          message: 'Registration successful! Welcome to our platform.',
        };
        emailjs.send('service_adp7son' , 'template_3nkynq6',emailParams , 'kydo4RwQ3e458r_Pe')
            .then(
              () =>{
                console.log('Success');
           
              },
              (error)=>{
                console.log(error);
              }
            )

        alert("Message Sent successfully");
       },


      )}
      
      
     else {
      alert('Please enter a message.');
    }
  }
}
