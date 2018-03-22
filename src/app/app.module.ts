import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpService } from './http.service';


import { 
  MzInputModule,
  MzButtonModule,
  MzIconModule,
  MzIconMdiModule,
  MzCollectionModule,
  MzCheckboxModule
} from 'ng2-materialize';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    MzCheckboxModule,
    HttpClientModule,
    MzInputModule,
    MzButtonModule,
    MzIconModule,
    MzIconMdiModule,
    MzCollectionModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
