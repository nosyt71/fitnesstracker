import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TrainingComponent } from './components/training/training.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { PastTrainingComponent } from './components/training/past-training/past-training.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/header/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './components/training/current-training/stop-training.component';
import { AuthService } from './components/auth/auth.service';
import { TrainingService } from './components/training/training.service';
import { environment } from '../assets/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// ng add @angular/fire to get AngularFireModule and AngularFirestoreModule

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"ng-fitness-tracker-ab4c1","appId":"1:750863354322:web:ac5ca6bef4db85e3fce00b","storageBucket":"ng-fitness-tracker-ab4c1.appspot.com","apiKey":"AIzaSyDXJ-W4b0-zoSB9jZ10nWSKRbFyCkRlfpE","authDomain":"ng-fitness-tracker-ab4c1.firebaseapp.com","messagingSenderId":"750863354322","measurementId":"G-GXEYN45W1J"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    provideAnimationsAsync(),
    AuthService,
    TrainingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
