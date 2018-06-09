import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import 'rxjs/Rx';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import {NgxMaskModule} from 'ngx-mask';
import { CadastroModule } from './cadastro/cadastro.module';

import { MyDatePickerModule } from 'mydatepicker';
import { PrincipalComponent } from './principal/principal.component';
import { ConfigComponent } from './configuracoes/config.component';


@NgModule({
  declarations: [
    AppComponent, CadastroComponent, PrincipalComponent, ConfigComponent
  ],
  imports: [
    BrowserModule, 
    routing, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    NgxMaskModule.forRoot(), 
    CadastroModule,
    MyDatePickerModule
  ],
  providers: [CadastroComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
