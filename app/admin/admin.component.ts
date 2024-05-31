import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-admin',
 
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})


export class AdminComponent implements OnInit {

  users: any[] = [];
  loading: boolean = true;
  error: string = '';


  constructor(private registerService : RegisterService , private router : Router){}

  ngOnInit(): void {
    
    this.registerService.getRegistration().subscribe(
     (data)=>{
          console.log("data :" , data);
           this.users=data;
           this.loading=false;
     },
     (error)=>{
      this.error = 'Failed to lad users';
      this.loading=false;
     }

    )
  }

  deleteUser(rid : number):void{
    if (confirm('Are you sure you want to delete this user?')){
    this.registerService.deleteRegistration(rid).subscribe(
      ()=>{
        console.log("Gone for deletion  to service");

      },
      (error)=>{
        console.log(error);
      }
    )
  }
  }
  detailsof(rid : string):void{
    sessionStorage.setItem("details" , rid);
    this.router.navigate(['details']);
  }
}

