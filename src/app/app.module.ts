import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientService } from './patient.service';
import { TherapistSignUpComponent } from './therapist-sign-up/therapist-sign-up.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    PatientDetailComponent,
    MessagesComponent,
    PatientSearchComponent,
    TherapistSignUpComponent
  ],
  providers: [ PatientService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
