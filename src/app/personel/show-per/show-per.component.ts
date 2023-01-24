import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-per',
  templateUrl: './show-per.component.html',
  styleUrls: ['./show-per.component.css']
})
export class ShowPerComponent implements OnInit{ // "ngOnInit" Angular içinde bir bileşenin görünümü ve alt görünümleri yüklendikten sonra çalışan bir yaşam döngüsü metodudur. 
  //Bu metod bileşenin ilk oluşturulduğunda çağrılır. 
  constructor(private service:SharedService){ }


  PersonelList:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditPerComp:boolean=false;
  per:any;


  ngOnInit(): void{
    this.refreshPerList(); //component çağrıldığında çalışır.
  }
  addClick() {
    this.per = {
      PersonelId: 0,
      PersonelAd: "",
      Departman:"",
      GirisTarihi:"",
      FotografAd:"cicek.png"
    }
    this.ModalTitle = "Personel Ekle";
    this.ActivateAddEditPerComp = true;
    
  }
  editClick(item:any){
    this.per=item;
    this.ModalTitle="Personel Düzenle"
    this.ActivateAddEditPerComp=true;
  }
  deleteClick(item:{PersonelId:any;}){
    if(confirm('Emin Misin?')){
      this.service.deletePersonel(item.PersonelId).subscribe(data=>{
        alert(data.toString());
      this.refreshPerList();
      })    
    }  
  }

  closeClick(){
    this.ActivateAddEditPerComp=false;
    this.refreshPerList();
  }

  refreshPerList(){ //Güncel listeyi getircek
    this.service.getPerlist().subscribe(data=>{
      this.PersonelList=data;
    });
  }
  
}
