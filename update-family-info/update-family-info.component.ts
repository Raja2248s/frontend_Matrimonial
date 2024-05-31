import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-update-family-info',
  templateUrl: './update-family-info.component.html',
  styleUrl: './update-family-info.component.css'

})
export class UpdateFamilyInfoComponent implements OnInit {
   
  public familyInfo ={
    rid:0,
    familyinfoId:0,
    familyStatus:'',
    familyType:'',
    fatherName:'',
  }
  constructor(private registerService : RegisterService, private route : ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.familyInfo.familyinfoId=params['id'];
      this.loadfamilyInfo();
    })
  }

  loadfamilyInfo():void{
    this.registerService.getfamilyinfoByid(this.familyInfo.familyinfoId).subscribe(
      
      (data)=>{
        console.log("data from backend " ,data);
        this.familyInfo=data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  updateFamilyInfo():void{
  this.registerService.patchFamilyinfo(this.familyInfo.familyinfoId , this.familyInfo).subscribe(
    response =>{
      console.log('family info updated succesfully' ,response);
      alert("family info updated succesfully")
    }
  )
  }
     
}
