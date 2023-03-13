import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'environments/environment';
import { HeaderComponent } from './components/header/header.component';

// Date
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
  },
  display: {
    dateInput: { day: 'numeric', month: 'long', year: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
};

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatNativeDateModule,

    provideFirebaseApp(() => initializeApp(environment.firebase.config)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
