// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { UserData } from '../user-data';
// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {
//   private baseURL = 'http://localhost:8086'
//   constructor(private http:HttpClient) { 
//   }

//   public addMessage(user : any):Observable<any>{
//     return this.http.post(`${this.baseURL}/message` , user);
//   }
  
//   public addUser(user:any):Observable<any>{
//     return this.http.post(`${this.baseURL}/reg`,user);
//   }
  
//   public getRegistrationinfobyid(id : number):Observable<any>{
//     return this.http.get(`${this.baseURL}/reg/id/${id}`);
//   }
//   public addUserinfo(user:any):Observable<any>{
//     return this.http.post("http://localhost:8086/user",user);
//   }
  
//   public addPersonalinfo(formData :FormData):Observable<any>{
//     console.log("Inside services of personal")
//     return this.http.post("http://localhost:8086/personal",formData);
//   }
//   public updatePersonalinfo(formData :FormData , id : number):Observable<any>{
//     console.log("Inside services of personal")
//     return this.http.put(`http://localhost:8086/personal/${id}`,formData);
//   }
//   public addFamilyinfo(user:any):Observable<any>{
//     return this.http.post("http://localhost:8086/family",user);
//   }
//   public addEducationinfo(user:any):Observable<any>{
//     return this.http.post("http://localhost:8086/edu",user);
//   }

//   public getRegistration():Observable<any[]>{
//     return this.http.get<any[]>("http://localhost:8086/reg");
//   }
//   public getPhotos():Observable<any[]>{
//     return this.http.get<any[]>("http://localhost:8086/personal");
//   }
   
//   public deleteRegistration(id: number): Observable<any> {
//     console.log(`${this.baseURL}/reg/${id}`);
//     return this.http.delete(`${this.baseURL}/reg/${id}`);
//   }

//   public getuserinfo(rid : number):Observable<any>{
  
//     return this.http.get<any>(`${this.baseURL}/user/rid/${rid}`)
//   }
//   public getpersonalinfo(rid : number):Observable<any>{
  
//     return this.http.get<any>(`${this.baseURL}/personal/rid/${rid}`)
//   }

//   public genderinfo():Observable<any[]>{
  
//     return this.http.get<any[]>(`${this.baseURL}/user`);
//   }

  

//   public getuserinfoByid(id : number):Observable<any>{
  
//     return this.http.get<any>(`${this.baseURL}/user/${id}`)
//   }
//   public getfamilyinfoByid(id : number):Observable<any>{
  
//     return this.http.get<any>(`${this.baseURL}/family/${id}`)
//   }
//   public getpersonalinfoByid(id : number):Observable<any>{
  
//     return this.http.get<any>(`${this.baseURL}/personal/${id}`)
//   }
//   public geteduinfoByid(id : number):Observable<any>{
  
//     return this.http.get<any>(`${this.baseURL}/edu/${id}`)
//   }

//   public getfamilyinfo(rid : number):Observable<any>{
  
//     return this.http.get<any>(`${this.baseURL}/family/rid/${rid}`)
//   }
//   public geteduinfo(rid : number):Observable<any>{
  
//     return this.http.get<any>(`${this.baseURL}/edu/rid/${rid}`)
//   }

//   public patchUserinfo(id: number, updates: any): Observable<any> {
//     return this.http.put(`${this.baseURL}/user/${id}`, updates);
//   }

//   public patchFamilyinfo(id: number, updates: any): Observable<any> {
//     return this.http.put(`${this.baseURL}/family/${id}`, updates);
//   }
//   public patcheduinfo(id: number, updates: any): Observable<any> {
//     return this.http.put(`${this.baseURL}/edu/${id}`, updates);
//   }
  
//   public updatereg(id:number , updates:any):Observable<any>{
//        return this.http.put(`${this.baseURL}/reg/${id}`,updates);
//   }

  

//    httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   };
//   public log(email : string):Observable<any>{
//     // const headers = { 'Content-Type': 'application/json' };
//     return this.http.get<any[]>(`http://localhost:8086/reg/${email}` , this.httpOptions)
//   }


// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../user-data';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseURL = 'http://localhost:8086';

  constructor(private http: HttpClient) { }

  public addMessage(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/message`, user);
  }

  public addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/reg`, user);
  }

  public addcontact(user : any):Observable<any>{
    return this.http.post(`${this.baseURL}/contact`,user);
  }

  public getcontact(email:string):Observable<any>{
    return  this.http.get(`${this.baseURL}/contact/{email}`);
  }
  public getRegistrationinfobyid(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/reg/id/${id}`);
  }

  public addUserinfo(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/user`, user);
  }

  public addPersonalinfo(formData: FormData): Observable<any> {
    console.log("Inside services of personal");
    return this.http.post(`${this.baseURL}/personal`, formData);
  }

  public updatePersonalinfo(formData: FormData, id: number): Observable<any> {
    console.log("Inside services of personal");
    return this.http.put(`${this.baseURL}/personal/${id}`, formData);
  }

  public addFamilyinfo(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/family`, user);
  }

  public addEducationinfo(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/edu`, user);
  }

  public getRegistration(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/reg`);
  }

  public getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/personal`);
  }

  public deleteRegistration(id: number): Observable<any> {
    console.log(`${this.baseURL}/reg/${id}`);
    return this.http.delete(`${this.baseURL}/reg/${id}`);
  }

  public getuserinfo(rid: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/user/rid/${rid}`);
  }

  public getpersonalinfo(rid: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/personal/rid/${rid}`);
  }

  public genderinfo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/user`);
  }

  public getuserinfoByid(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/user/${id}`);
  }

  public getfamilyinfoByid(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/family/${id}`);
  }

  public getpersonalinfoByid(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/personal/${id}`);
  }

  public geteduinfoByid(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/edu/${id}`);
  }

  public getfamilyinfo(rid: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/family/rid/${rid}`);
  }

  public geteduinfo(rid: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/edu/rid/${rid}`);
  }

  public patchUserinfo(id: number, updates: any): Observable<any> {
    return this.http.put(`${this.baseURL}/user/${id}`, updates);
  }

  public patchFamilyinfo(id: number, updates: any): Observable<any> {
    return this.http.put(`${this.baseURL}/family/${id}`, updates);
  }

  public patcheduinfo(id: number, updates: any): Observable<any> {
    return this.http.put(`${this.baseURL}/edu/${id}`, updates);
  }

  public updatereg(id: number, updates: any): Observable<any> {
    return this.http.put(`${this.baseURL}/reg/${id}`, updates);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public log(email: string): Observable<any> {
    // const headers = { 'Content-Type': 'application/json' };
    return this.http.get<any[]>(`${this.baseURL}/reg/${email}`, this.httpOptions);
  }
}

