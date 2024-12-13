import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment';
import {provideFirebaseApp, initializeApp, getApp} from '@angular/fire/app';
import {provideFirestore, getFirestore, initializeFirestore} from '@angular/fire/firestore';
import { OrganesService } from './organes.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => initializeFirestore(getApp(), {ignoreUndefinedProperties: true})), OrganesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
