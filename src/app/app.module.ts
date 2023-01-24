import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmanComponent } from './departman/departman.component';
import { ShowDepComponent } from './departman/show-dep/show-dep.component';
import { AddEditDepComponent } from './departman/add-edit-dep/add-edit-dep.component';
import { PersonelComponent } from './personel/personel.component';
import { ShowPerComponent } from './personel/show-per/show-per.component';
import { AddEditPerComponent } from './personel/add-edit-per/add-edit-per.component';
import { SharedService } from './shared.service'; //SRC-APP-APP.MODULE.TS’DE SHAREDSERVİCE DÜZENLEMESİ YAPTIM
//	GEREKLİ SERVİS MODÜLLERİNİ DE APP.MODULE.TS IMPORT ETTİM
import{HttpClientModule} from '@angular/common/http'; //modül import ettim
import { FormsModule,ReactiveFormsModule} from '@angular/forms'; //modül import ettim
@NgModule({
  declarations: [
    AppComponent,
    DepartmanComponent,
    ShowDepComponent,
    AddEditDepComponent,
    PersonelComponent,
    ShowPerComponent,
    AddEditPerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//ekleme yaptım
    FormsModule,//ekleme yaptım
    ReactiveFormsModule //ekleme yaptım

  ],
  providers: [SharedService], //içini doldurdum. servis sağlayıcı
  bootstrap: [AppComponent]
})
export class AppModule { }
