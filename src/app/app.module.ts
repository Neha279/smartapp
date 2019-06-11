import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WardPageComponent } from './wardpage/wardpage.component';
import { environment } from 'src/environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {DataService} from './service/data.service'
import {UtilService} from './service/util.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
 
  declarations: [
    AppComponent,
    WardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),    
    AngularFireDatabaseModule,                
    AngularFireAuthModule,   
    DemoMaterialModule,
    BrowserAnimationsModule,
    ScrollingModule,
  ],
  providers: [DataService, UtilService],
  bootstrap: [AppComponent],
  exports: [WardPageComponent]
  
})
export class AppModule { }
