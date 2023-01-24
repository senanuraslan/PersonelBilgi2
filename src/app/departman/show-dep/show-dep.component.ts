import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit{ // "ngOnInit" Angular içinde bir bileşenin görünümü ve alt görünümleri yüklendikten sonra çalışan bir yaşam döngüsü metodudur. 
  //Bu metod bileşenin ilk oluşturulduğunda çağrılır. 
  constructor(private service:SharedService){ }


  DepartmanList:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmanIdFilter:string="";
  DepartmanAdFilter:string="";
  DepartmanListWithoutFilter:any=[];


  ngOnInit(): void{
    this.refreshDepList(); //component çağrıldığında çalışır.
  }
  addClick(){
    this.dep={
      DepartmanId:0,
      DepartmanAd:""
    }
    this.ModalTitle="Departman Ekle"
    this.ActivateAddEditDepComp=true;
  }
  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Departman Düzenle"
    this.ActivateAddEditDepComp=true;
  }
  deleteClick(item:{DepartmanId:any;}){
    if(confirm('Emin Misin?')){
      this.service.deleteDepartman(item.DepartmanId).subscribe(data=>{
        alert(data.toString());
      this.refreshDepList();
      })    
    }  
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }

  refreshDepList(){ //Güncel listeyi getircek
    this.service.getDeplist().subscribe(data=>{
      this.DepartmanList=data;
      this.DepartmanListWithoutFilter=data; //verileri gncelletip gösteriyor
    });
  }

  FiltreFn(){
    var DepartmanIdFilter=this.DepartmanIdFilter;
    var DepartmanAdFilter=this.DepartmanAdFilter;

    this.DepartmanList=this.DepartmanListWithoutFilter.filter(
      function(el:{DepartmanId:{toString:()=>string;}; DepartmanAd:{toString:()=>string;};}){
        return el.DepartmanId.toString().toLowerCase().includes
          (
            DepartmanIdFilter.toString().trim().toLocaleLowerCase()
          )&&
          el.DepartmanAd.toString().toLowerCase().includes
          (
            DepartmanAdFilter.toString().trim().toLocaleLowerCase()
          )
      });
    }
    
    sortResult(prop:any,asc:any){
      this.DepartmanList=this.DepartmanListWithoutFilter.sort(function(a:any,b:any){
        if(asc){
          return (a[prop]>b[prop])?1: ((a[prop]<b[prop]) ?-1:0);
        }
        else{
          return (b[prop]>a[prop])?1: ((b[prop]<a[prop]) ?-1:0);
        }
      })
    }
}
