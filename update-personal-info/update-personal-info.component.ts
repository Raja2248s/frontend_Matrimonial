import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-update-personal-info',
 
  templateUrl: './update-personal-info.component.html',
  styleUrl: './update-personal-info.component.css'
})
export class UpdatePersonalInfoComponent implements OnInit {
 

  age: number = 0;
  bloodGroup: string = '';
  photo: File | null = null;

 constructor(private registerService : RegisterService , private route:ActivatedRoute){}
  
 public user = {
    rid: 0,
    bloodGroup: '',
    age: 0,
    photograph: null,
    personalId:0,
  }


  

 ngOnInit(): void {
  const id =52;

  this.route.queryParams.subscribe(params =>{
   this.user.personalId=params['id'];

  })


   this.registerService.getpersonalinfoByid(id).subscribe(
    data =>{
         this.user=data;
        //  this.photoUrl=  this.createImageUrl(data.photograph);
    },
    error =>{
      console.log(error);
    }
   )
  }

  formSubmit(){

    const formData = new FormData();

    if(this.user.photograph){
      formData.append('file' , this.user.photograph);
      formData.append('bloodGroup', this.user.bloodGroup);
      formData.append('age', this.user.age.toString());
    }
         this.registerService.updatePersonalinfo(formData , this.user.personalId).subscribe(
          (data)=>{
            alert("profile updated sucessfully");    
          }
         )
  }

  loadPersonalInfo():void{
this.registerService.getpersonalinfoByid(this.user.personalId).subscribe(
  (data)=>{
    console.log(data);
    this.user=data;
    // this.user.photograph=this.createImageUrl(data.photgraph);
  },
  (error)=>{

  }
)

  }
  createImageUrl(photograph:any):string {
    if(photograph){
      const base64Data = photograph;
      console.log(`data:image/jpeg:base64,${base64Data}`)
      return `data:image/jpeg;base64,${base64Data}`;
    }
    console.log("Not photgraph");
    return '';
  }


  onFileSelcetd(event: any) {
    
    if (event.target.files && event.target.files.length > 0) {
      console.log("Photograph is correct");
      this.user.photograph = event.target.files[0];
    } else {
      console.log("Photograph not valid");
    }
  }

}
