// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { RegisterService } from '../services/register.service';
// import { Registration } from '../interfaces/auth';
// import { error } from 'console';
// import { UserDataService } from '../user-data.service';

// @Component({
//   selector: 'app-personal-info',
//   templateUrl: './personal-info.component.html',
//   styleUrl: './personal-info.component.css'
// })
// export class PersonalInfoComponent implements OnInit {

//   age: number=0;
//   bloodGroup: string='';
//   photo: File | null = null;
  
//   constructor(private http: HttpClient , private router:Router , private registerService : RegisterService , private userDataService : UserDataService){}
  
//   public user ={
//     rid:0,
//     bloodGroup:'',
//     age:0,
//     photograph:null,
   
//   }
   
// ngOnInit(): void {
//   // const storedmail= localStorage.getItem('email');
  
// //   if (storedmail !== null) {
// //   this.registerService.findregister(storedmail).subscribe(
// //     (data:any) => {
// //       this.user.registration=data;

// //       console.log(data);
// //     }
// //     // (error) => {
// //     //   console.log(error);
// //     //   alert('Error occurred while finding registration');
// //     // }
// //   );
// // }


// }


// formSubmit() {
//   const userData = this.userDataService.getUserData();
//   const ridString = localStorage.getItem('rid');
//    const formData = new FormData();

//       if (ridString !== null) {
//         this.user.rid = parseInt(ridString, 10);
//       } 
//       else{
//         console.log("error in rid");
//       }
      
//       if (this.user.photograph && this.user.age) {
//         formData.append('file', this.user.photograph);
//         formData.append('bloodGroup' , this.user.bloodGroup);
//         formData.append('age' , this.user.age.toString());
//         formData.append('rid' , this.user.rid.toString());
//       } else {
//         console.log("No photograph selected");
//       }
             
//       const formDataEntries = formData as any;
//   for (let pair of formDataEntries.entries()) {
//     console.log(`${pair[0]}: ${pair[1]}`);
//   }
//       this.registerService.addPersonalinfo(formData).subscribe(
//         (data)=>{
//           console.log(data);
//           alert("Personal Info updated sucessfully");
//           this.router.navigate(['family_info'])
          
//         },
//         (error)=>{
//           console.log(error);
//           alert("something went wrong in backend");
//         }
//       )

//   userData.personal = this.user
//   console.log(userData);
//       // this.registerService.addPersonal(userData).subscribe(
//       //   (data)=>{
//       //         console.log(data);
              
//       //         this.bloodGroup='';
//       //         this.age=0;
//       //         alert('Registration Sucessfull');
//       //         this.router.navigate(['family_info'])

//       //   }
//       //   ,
//       //   (error)=>{
//       //     console.log(error);
//       //     alert('Something went wrong');
//       //   }
//       // )
//   }

//   register(){
//      if(this.user.bloodGroup ==''){
//       alert('Please enter blood group');
//       return ;
//      }
//      if(this.user.age<=18){
//       alert('You are not eligible');
//       return;
//      }
//      this.formSubmit();
//   }
//   // onFileSelected(event: any) {
//   //   if (event.target.files && event.target.files.length > 0) {
//   //     const file = event.target.files[0];
//   //     this.photo =URL.createObjectURL(file) ;
//   //   }
//   // }
//   onFileSelcetd(event : any){
//     if (event.target.files && event.target.files.length > 0) {
//       console.log("Photograph is correct");
//       this.user.photograph = event.target.files[0];
//     }
//     else{
//       console.log("Photogrpah not valid");
//     }
//   }

// }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  age: number = 0;
  bloodGroup: string = '';
  photo: File | null = null;

  constructor(private http: HttpClient, private router: Router, private registerService: RegisterService, private userDataService: UserDataService) { }

  public user = {
    rid: 0,
    bloodGroup: '',
    age: 0,
    photograph: null,
  }

  ngOnInit(): void {
    const ridString = localStorage.getItem('rid');
    if (ridString !== null) {
      this.user.rid = parseInt(ridString, 10);
    }
  }

  formSubmit() {
    const userData = this.userDataService.getUserData();
    const ridString = localStorage.getItem('rid');
    const formData = new FormData();

    if (ridString !== null) {
      this.user.rid = parseInt(ridString, 10);
    } else {
      console.log("Error in rid");
    }

    if (this.user.photograph && this.user.age) {
      formData.append('file', this.user.photograph);
      formData.append('bloodGroup', this.user.bloodGroup);
      formData.append('age', this.user.age.toString());
      formData.append('rid', this.user.rid.toString());
    } else {
      console.log("No photograph selected");
    }

    // Log the FormData content
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    this.registerService.addPersonalinfo(formData).subscribe(
      (data) => {
        console.log(data);
        alert("Personal Info updated successfully");
        this.router.navigate(['family_info']);
      },
      (error) => {
        console.log(error);
        alert("Something went wrong in backend");
      }
    );

    userData.personal = this.user;
    console.log(userData);
  }

  register() {
    if (this.user.bloodGroup == '') {
      alert('Please enter blood group');
      return;
    }
    if (this.user.age <= 18) {
      alert('You are not eligible');
      return;
    }
    this.formSubmit();
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
