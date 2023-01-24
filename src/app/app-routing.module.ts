import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonelComponent } from './personel/personel.component';  //(TS-TYPESCRIPT)PERSONEL/DEPARTMAN KOMPONENTLERİNİ IMPORT ETTİM
import { DepartmanComponent } from './departman/departman.component'; //(TS-TYPESCRIPT)PERSONEL/DEPARTMAN KOMPONENTLERİNİ IMPORT ETTİM

const routes: Routes = [
  {path:'Personel',component:PersonelComponent},  //<router-outlet></router-outlet> çalışıp buraya geliyor //(TS-TYPESCRIPT)PERSONEL/DEPARTMAN KOMPONENTLERİNİ IMPORT ETTİM
  {path:'Departman',component:DepartmanComponent}  //(TS-TYPESCRIPT)PERSONEL/DEPARTMAN KOMPONENTLERİNİ IMPORT ETTİM
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
