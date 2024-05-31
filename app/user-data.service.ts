import { Injectable } from '@angular/core';
import { UserData } from './user-data';
import { user } from 'rxfire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userData : UserData ={
    user: {
      rid:0,
      firstName: '',
      lastName: '',
      address: '',
      noOfGuest: 0 ,
      gender: '',
      dateofFunction: '',
      mobileNum: ''
    },
    personal: {
      rid:0,
      photograph: null,
      bloodGroup: '',
      age: 0
    },
    family: {
      rid:0,
      familyStatus: '',
      familyType: '',
      fatherName: ''
    },
    education: {
      rid:0,
      educationLevel: '',
      educationFiled: '',
    },
    registration:{
    userName: '',
    password: '',
    phoneno: 0,
    email: '',
    }

  } 
  constructor() { }
   
  setUserData(userData: UserData){
    this.userData=userData
  }
  
  getUserData(): UserData {
    return this.userData;
  }
}
