import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean=false;


 constructor(private router : Router ){}
  ngOnInit(): void {
    this.checkAdmin();
  }

  
    checkAdmin() {
      const email = localStorage.getItem('loginemail');
      if(email == 'Admin@gmail.com'){
        this.isAdmin=true;
      }
      else{
        this.isAdmin=false;
      }
    
  }

logOut(){
localStorage.removeItem('loginemail');
localStorage.removeItem('loginid');
this.router.navigate(['login'])
}
}
