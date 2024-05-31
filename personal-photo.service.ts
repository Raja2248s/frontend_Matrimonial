import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalPhotoService {
  private apiUrl = 'http://localhost:8086/personal/photos';

  constructor(private http: HttpClient) { }

  getAllPhotos(): Observable<{ rid: number, photograph: string }[]> {
    return this.http.get<{ rid: number, photograph: string }[]>(this.apiUrl);
  }
}
