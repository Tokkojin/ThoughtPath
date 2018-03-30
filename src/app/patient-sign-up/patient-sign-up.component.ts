import { Component, OnInit } from '@angular/core';
import { Model, SurveyNG } from 'survey-angular';

const surveyJSON = {
  pages: [
      {
        name: 'contactInfo',
        elements: [
          {
            type: 'panel', name: 'contactInfoPanel', elements: [
              {type: 'text', name: 'patientNameQ', title: 'What is your name?', isRequired: true},
              {type: 'text', name: 'patientEmailQ', title: 'What is your email?', isRequired: true},
              {type: 'text', name: 'preferReachOutQ', title: 'How would you prefer to reach out to your therapist for the first time?', isRequired: true}],
            title: 'Contact Information'}]}, {name: 'logistics', elements:
        [{type: 'panel', name: 'logisticsPanel', elements: [{type: 'text', name: 'specialtyQ', title: 'What specialty are you looking for?', isRequired: true}, {type: 'text', name: 'insuranceQ', title: 'What is your insurance?', isRequired: true}, {type: 'rating', name: 'affordQ', title: 'What are you willing to afford per meeting?', isRequired: true, rateValues: [{value: 1, text: '50'}, {value: 2, text: '100'}, {value: 3, text: '150'}, {value: 4, text: '200'}, {value: 5, text: '250'}]}, {type: 'matrixdropdown', name: 'availabilityQ', title: 'When are you available to meet?', isRequired: true, columns: [{name: 'Sunday', cellType: 'checkbox'}, {name: 'Monday', cellType: 'checkbox'}, {name: 'Tueday', cellType: 'checkbox'}, {name: 'Wednesday', cellType: 'checkbox'}, {name: 'Thursday', cellType: 'checkbox'}, {name: 'Friday', cellType: 'checkbox'}, {name: 'Saturday', cellType: 'checkbox'}], choices: ['Available'], rows: ['Morning  (9 to Noon)', 'Afternoon (Noon to 3)', 'Evening (3 to 6)']}], title: 'Logistics'}, {type: 'panel', name: 'locationPanel', elements: [{type: 'text', name: 'locationQ', title: 'How far are you willing to travel?', isRequired: true}, {type: 'text', name: 'zipcodeQ', title: 'What is your zip code?', isRequired: true}], title: 'Location'}]}, {name: 'matching', elements: [{type: 'panel', name: 'matchingPanel', elements: [{type: 'comment', name: 'question3', title: 'What do you want out of therapy?', isRequired: true}, {type: 'matrixdropdown', name: 'personality5TraitsQ', title: 'Describe your personality in five traits:', isRequired: true, columns: [{name: 'Trait 1', cellType: 'text', isRequired: true}, {name: 'Trait 2', cellType: 'text', isRequired: true}, {name: 'Trait 3', cellType: 'text', isRequired: true}, {name: 'Trait 4', cellType: 'text', isRequired: true}, {name: 'Trait 5', cellType: 'text', isRequired: true}], choices: [1, 2, 3, 4, 5], rows: ['Traits']}, {type: 'comment', name: 'personGetAlongWithQ', title: 'Describe the type of person you get along with:', isRequired: true}, {type: 'radiogroup', name: 'writeReviewQ', title: 'Are you willing to write a review after meeting a therapist?', isRequired: true, choices: [{value: 'item1', text: 'Yes'}, {value: 'item2', text: 'No'}]}, {type: 'radiogroup', name: 'therapyBeforeQ', title: 'Have you been to therapy before?', isRequired: true, choices: [{value: 'item1', text: 'Yes'}, {value: 'item2', text: 'No'}]}, {type: 'checkbox', name: 'certainCriteriaQ', title: 'Is there certain criteria you want in your therapist?', isRequired: true, choices: [{value: 'gender', text: 'Gender'}, {value: 'age', text: 'Age'}, {value: 'ethnicity', text: 'Ethnicity'}, {value: 'other', text: 'Other'}]}, {type: 'radiogroup', name: 'preferredGenderQ', visibleIf: '{certainCriteriaQ} contains "gender"', title: 'Preferred Gender of Therapist:', choices: [{value: 'item1', text: 'Male'}, {value: 'item2', text: 'Female'}, {value: 'item3', text: 'Nonbinary'}]}, {type: 'text', name: 'preferredAgeQ', visibleIf: '{certainCriteriaQ} contains "age"', title: 'Preferred Age of Therapist:'}, {type: 'dropdown', name: 'preferredEthnicityQ', visibleIf: '{certainCriteriaQ} contains "ethnicity"', title: 'Preferred Ethnicity of Therapist:', choices: [{value: 'americanIndian', text: 'American Indian or Alaska Native'}, {value: 'asian', text: 'Asian'}, {value: 'black', text: 'Black or African American'}, {value: 'hispanic', text: 'Hispanic or Latino'}, {value: 'nativeHawaiian', text: 'Native Hawaiian or Other Pacific Islander'}, {value: 'white', text: 'White'}]}, {type: 'text', name: 'otherCriteriaQ', visibleIf: '{certainCriteriaQ} contains "other"', title: 'Other Criteria:'}], title: 'Matching'}]}]};

function sendDataToServer(survey) {
    // send Ajax request to your web server.
    alert('The results are:' + JSON.stringify(survey.data));
}

@Component({
  selector: 'app-patient-sign-up',
  templateUrl: './patient-sign-up.component.html',
  styleUrls: ['./patient-sign-up.component.css']
})

export class PatientSignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const survey = new Model(surveyJSON);
    survey.onComplete.add(sendDataToServer);
    SurveyNG.render('surveyElement', { model: survey });
  }

}
