import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import {TherapistSignUpComponent} from './therapist-sign-up/therapist-sign-up.component';
import { PatientSignUpComponent } from './patient-sign-up/patient-sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PatientDetailComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'therapist-sign-up', component: TherapistSignUpComponent },
  { path: 'patient-sign-up', component: PatientSignUpComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
