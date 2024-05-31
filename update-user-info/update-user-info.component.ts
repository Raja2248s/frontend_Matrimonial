import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrl: './update-user-info.component.css'
})

export class UpdateUserInfoComponent implements OnInit  {

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

  constructor(private route:ActivatedRoute , private registerService : RegisterService){}
  ngOnInit(): void {
     this.route.queryParams.subscribe(params =>{
      this.userInfo.userId=params['id'];
      this.loadUserInfo();
     })
  }
    

  loadUserInfo():void{
    this.registerService.getuserinfoByid(this.userInfo.userId).subscribe(
      (data)=>{
        console.log(data);
        this.userInfo=data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  updateUserInfo():void{
         this.registerService.patchUserinfo(this.userInfo.userId , this.userInfo).subscribe(
          response =>{
            console.log('user Info updated sucessfully' , response);
            alert("user Info updated sucessfully")
          }
         )
  }
        

}
