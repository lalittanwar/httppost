import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttppostComponent } from './httppost/httppost.component';
import{UserService} from './user.service';




@NgModule({
  declarations: [
    AppComponent,
    HttppostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
