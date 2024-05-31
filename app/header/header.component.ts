import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 constructor(private router : Router ){}

logOut(){
localStorage.removeItem('loginemail');
localStorage.removeItem('loginid');
this.router.navigate(['login'])
}
}
