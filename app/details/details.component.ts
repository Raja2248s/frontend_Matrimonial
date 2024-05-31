import { UserData } from './../user-data';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

 
  personalInfo: any = {};
  photoUrl: string = '';
  public userInfo ={
    rid:0,
    userId:0,
    firstName: '',
    lastName: '',
    address: '',
    noOfGuest: 0 ,
    gender: '',
    dateofFunction: '',
    mobileNum: ''
  }
   
  // public personalInfo ={
  //   rid: 0,
  //   bloodGroup: '',
  //   age: 0,
  //   personalId:0,
  //   photograph: '',
  // }

  public familyInfo ={
    rid:0,
    familyStatus:'',
    familyinfoId:0,
    familyType:'',
    fatherName:'',
  }

  public eduInfo ={
    rid:0,
    educationId:0,
    educationLevel: '',
    educationFiled: '',

  }
  constructor(private registerService : RegisterService , private router : Router ){}

  ngOnInit(): void {
    const ridString = sessionStorage.getItem('details');
    if(ridString){
      const rid = parseInt(ridString,10);
      console.log("rid " , rid);
      this.fetchUserInfo(rid);
      this.fetchPersonalInfo(rid);
      this.fetchfamilyInfo(rid);
      this.fetcheduInfo(rid);
    }
    
  }

  fetchUserInfo(rid:number):void{
  
      this.registerService.getuserinfo(rid).subscribe(
        (data)=>{
          console.log(data);
          this.userInfo = { ...this.userInfo, ...data };
          
        },
        (error) =>{
          console.log(error);
        }
      )
  }

  fetchPersonalInfo(rid:number){
    const id = rid;
    this.registerService.getpersonalinfo(id).subscribe(
      (data)=>{
        console.log("personal " , data);
        this.personalInfo = data;  
        console.log(data.photograph);
        this.photoUrl= this.createImageUrl(data.photograph); 
        console.log("phourrl " , this.photoUrl);   
      } 
      ,(error) =>{
        console.log(error);
      }
    )
  }
  createImageUrl(photograph : any):string{
    console.log("photo : ", photograph);
    if(photograph){
      const base64Data = photograph;
      console.log(`data:image/jpeg:base64,${base64Data}`)
      return `data:image/jpeg;base64,${base64Data}`;
    }
    else{
      console.log("No photograph");
      return '';
    }
  }

  fetchfamilyInfo(rid:number){
    this.registerService.getfamilyinfo(rid).subscribe(
      (data)=>{
        console.log(data);
        this.familyInfo = { ...this.familyInfo, ...data };
      }
      ,(error)=>{
   console.log(error);
      }
    )
  }

  fetcheduInfo(rid:number){
    this.registerService.geteduinfo(rid).subscribe(
      (data)=>{
        console.log(data);
        this.eduInfo = { ...this.eduInfo, ...data };
      }
      ,(error)=>{
   console.log(error);
      }
    )
  }

 

  navigatetoUpdate(section : string , id:number):void{
      this.router.navigate([`update-${section}`] , {queryParams : {id:id}});
      console.log("Navigating to that ");
   console.log("Hello")
  }

}

