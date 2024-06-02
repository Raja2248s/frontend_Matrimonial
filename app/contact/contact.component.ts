import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit{

  contact = {
    name: '',
    email: localStorage.getItem('loginemail'),
    message: ''
  };
  constructor(private registerService : RegisterService , private router : Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    this.registerService.addcontact(this.contact).subscribe(
      ()=>{
        alert("We got your suggestion");
        this.contact.message='';
        this.router.navigate(['photo-gallery']);
      },
      (error)=>{
        console.log(error);
      }
    )
   
  }

}
