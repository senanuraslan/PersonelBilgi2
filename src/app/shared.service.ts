import { Injectable } from '@angular/core';
//SHARED.SERVICE.TS’DE GEREKLİ SERVİSLERİ IMPORT ETTİM.
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //Gözlemleyebilir
//RxJS (Reactive Extensions for JavaScript) bir JavaScript kütüphanesidir ve verileri işlemek için kullanılan bir reaktif 
//programlama modelini sağlar. 'Observable' ise RxJS içinde bulunan bir sınıftır ve verilerin değişimini takip etmek için kullanılır. Özellikle asenkron verileri işlemek için kullanışlıdır. 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //API İLE BAĞLANTI İÇİN LOCALHOST ADRESLERİMİ BELİRTTİM
  readonly APIUrl="http://localhost:52184/_api" //AngularApi projenini localhostunu girdim VS dan yaptığım projenin verilerini çekmek için yaptık
  readonly  PhotoUrl="http://localhost:52184/Photos/" //AngularApi projenini localhostunu girdim


  constructor(private http:HttpClient) { }
  //DEpartman için fonksiyonlar
  getDeplist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Departman');
  }
  addDepartman(val:any){
    return this.http.post(this.APIUrl+'/Departman', val);
  }
  updateDepartman(val:any){
    return this.http.put(this.APIUrl+'/Departman', val);
  }
  deleteDepartman(val:any){
    return this.http.delete(this.APIUrl+'/Departman/' +val);
  }
  //Personel için fonksiyonlar
  getPerlist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Personel');
  }
  addPersonel(val:any){
    return this.http.post(this.APIUrl+'/Personel', val);
  }
  updatePersonel(val:any){
    return this.http.put(this.APIUrl+'/Personel/',val);
  }
  deletePersonel(val:any){
    return this.http.delete(this.APIUrl+'/Personel/' +val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Personel/SaveFile',val);
  }
  getAllDepartmanAdlari():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Personel/GetAllDepartmanAdlari');
  }

}
