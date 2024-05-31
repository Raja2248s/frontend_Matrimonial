import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  users: any[] = [];
  loading: boolean = true;
  error: string = '';
  photos: { rid: number, age: number, bloodgroup: string, gender: string, photograph: string }[] = [];
  filteredPhotos: { rid: number, age: number, bloodgroup: string, gender: string, photograph: string }[] = [];
  genderInfo: { rid: number, gender: string }[] = [];
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerService.getPhotos().subscribe(
      (data) => {
        console.log("Data for photo gallery: ", data);
        this.photos = data;
        this.filteredPhotos = data;
        this.loading = false;
        this.combineData();
      },
      (error) => {
        console.log(error);
        this.error = 'Error fetching photos';
        this.loading = false;
      }
    );

    this.registerService.genderinfo().subscribe(
      (data) => {
        console.log("Gender info: ", data);

        this.genderInfo = data.map((item: any) => ({
          rid: item.rid,
          gender: item.gender ? item.gender.toLowerCase() : 'unknown'
        }));
        this.combineData();
      },
      (error) => {
        console.log(error);
        this.error = 'Error fetching gender information';
      }
    );
  }

  combineData() {
    if (this.photos.length > 0 && this.genderInfo.length > 0) {
      this.photos = this.photos.map(photo => {
        const genderData = this.genderInfo.find(g => g.rid === photo.rid);
        return { ...photo, gender: genderData ? genderData.gender : 'unknown' };
      });
      this.filteredPhotos = this.photos;
    }
  }

  filterPhotos() {
    const ageFilter = (document.getElementById('ageFilter') as HTMLSelectElement).value;
    const genderFilter = (document.getElementById('genderFilter') as HTMLSelectElement).value;

    this.filteredPhotos = this.photos.filter(photo => {
      let ageMatch = true;
      let genderMatch = true;

      if (ageFilter === 'below25') {
        ageMatch = photo.age < 25;
      } else if (ageFilter === 'above25') {
        ageMatch = photo.age >= 25;
      }

      if (genderFilter === 'groom') {
        genderMatch = photo.gender === 'male';
      } else if (genderFilter === 'bride') {
        genderMatch = photo.gender === 'female';
      }

      return ageMatch && genderMatch;
    });
  }

  logRid(rid: number) {
    console.log("Photo clicked, RID:", rid);
    sessionStorage.setItem('details', rid.toString());
    this.router.navigate(['match-details']);
  }
}
