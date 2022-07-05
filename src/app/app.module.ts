import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseAppModule, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MyMaterialModule } from 'src/app/@shared/modules/material.modules';
import {  } from '@angular/fire/firestore';
import { ShellComponent } from './@shared/shell/shell.component';
import { enableIndexedDbPersistence, FirestoreSettings, initializeFirestore } from 'firebase/firestore';
import { getApp } from 'firebase/app';
import { AuthService } from 'src/app/@shared/services/auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideFirestore(() => {
       
      const firestoreSettings: FirestoreSettings & { useFetchStreams: boolean } = {
           useFetchStreams: false, /* this might not be doing anything*/
           experimentalAutoDetectLongPolling: true /* This line fixed my issue*/
      };
     const app = getApp();  // Gets current app
     const firestore = initializeFirestore(app, firestoreSettings) // not using getFirestore();


    enableIndexedDbPersistence(firestore);
    return firestore;
   }),  
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    MyMaterialModule,
    FlexLayoutModule,   

  ],
  providers: [
    ScreenTrackingService,UserTrackingService,AuthService,{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
