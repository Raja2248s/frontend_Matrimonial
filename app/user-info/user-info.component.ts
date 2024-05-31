import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Registration } from '../interfaces/auth';
import { error } from 'console';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-user-info',
  
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})

export class UserInfoComponent implements OnInit{
 
  ngOnInit(): void {} 
 
    firstName: string='';
    lastName: string='';
    address: string='';
    noOfGuest: number=0;
    gender: string='';
    dateofFunction: string='';
    mobileNum: string='';
      
    public user ={
      rid:0,
      firstName: '',
      lastName: '',
      address: '',
      noOfGuest: 0 ,
      gender: '',
      dateofFunction: '',
      mobileNum: ''
    }

    constructor(private http: HttpClient , private router:Router , private registerService : RegisterService , private userDataService : UserDataService){}

    formsubmit(){
      const userData = this.userDataService.getUserData();
      const ridString = localStorage.getItem('rid');

      if (ridString !== null) {
        this.user.rid = parseInt(ridString, 10);
      } 
      else{
        console.log("error in rid");
      }

      userData.user = this.user
      this.registerService.addUserinfo(userData.user).subscribe(
        (data)=>{
          console.log(data);
          alert("user info registraion sucessfull");
          this.router.navigate(['personal_info'])
          
        },
        (error)=>{
          console.log(error);
          alert("something wrong in backend");
        }
      )
      console.log(userData);

    }
  }