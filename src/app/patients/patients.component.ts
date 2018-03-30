import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

export class PatientsComponent implements OnInit {
  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients()
      .subscribe(patients => this.patients = patients);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.patientService.addPatient({ name } as Patient)
      .subscribe(patient => {
        this.patients.push(patient);
      });
  }

  delete(patient: Patient): void {
    this.patients = this.patients.filter(p => p !== patient);
    this.patientService.deletePatient(patient).subscribe();
  }

}
