import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-update-education-info',
  templateUrl: './update-education-info.component.html',
  styleUrl: './update-education-info.component.css'
})

export class UpdateEducationInfoComponent implements OnInit {


  public eduInfo ={
    rid:0,
    educationLevel: '',
    educationFiled: '',
    educationId:0
  }

  constructor(private registerService : RegisterService , private route : ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.eduInfo.educationId=params['id'];
       this.loadeduInfo();
    })
  }


  loadeduInfo():void{
    this.registerService.geteduinfoByid(this.eduInfo.educationId).subscribe(
      (data) =>{
        console.log("data from backend" , data);
        this.eduInfo=data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  updateEduInfo():void{
    this.registerService.patcheduinfo(this.eduInfo.educationId , this.eduInfo).subscribe(
      response =>{
        console.log('Education info updated succesfully' ,response);
        alert("Education info updated succesfully")
      }
    )
  }

}
