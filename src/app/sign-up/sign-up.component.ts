import { Component, OnInit } from '@angular/core';
import { Model, SurveyNG } from 'survey-angular';
import { HttpClient } from '@angular/common/http';

const surveyJSON = {
  pages: [
    {
      name: 'contactInfo',
      elements: [
        {
          type: 'panel',
          name: 'contactInfoPanel',
          elements: [
            {
              type: 'text',
              name: 'patientNameQ',
              title: 'What is your name?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'patientEmailQ',
              title: 'What is your email?',
              isRequired: true,
              validators: [
                {
                  type: 'email'
                }
              ]
            },
            {
              type: 'rating',
              name: 'clientOrTherapistQ',
              title: 'Are you a client or therapist?',
              rateValues: [
                {
                  value: 'client',
                  text: 'Client'
                },
                {
                  value: 'therapist',
                  text: 'Therapist'
                }
              ]
            },
            {
              type: 'text',
              name: 'preferReachOutQ',
              visibleIf: '{clientOrTherapistQ} = "client"',
              title: 'How would you prefer to reach out to your therapist for the first time?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'practiceLicenseQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'What is your practice license?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'nameOfPracticeQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'What is the name of your practice?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'therapistPhoneNumberQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'What is your phone number?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'therapistAddressQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'Where is your office?',
              isRequired: true
            },
            {
              type: 'rating',
              name: 'therapistPreferredContactQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'How would you like a client to reach you?',
              isRequired: true,
              rateValues: ['Phone', 'Email']
            }
          ],
          title: 'Contact Information'
        }
      ]
    },
    {
      name: 'logistics',
      elements: [
        {
          type: 'panel',
          name: 'therapistLogisticsPanel',
          elements: [
            {
              type: 'text',
              name: 'yearsOfPracticeQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'How many years have you been practicing?',
              isRequired: true
            },
            {
              type: 'comment',
              name: 'educationBackground',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'What is your educational background?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'dateOfLastClassQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'What is the date of the last class you enrolled in?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'specialtyQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'What is your specialty/area of focus?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'insurancePanelsQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'What insurance panels do you use?',
              isRequired: true
            },
            {
              type: 'matrixdropdown',
              name: 'therapistAvailabilityQ',
              title: 'When are you available to meet?',
              isRequired: true,
              columns: [
                {
                  name: 'Sunday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Monday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Tueday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Wednesday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Thursday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Friday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Saturday',
                  cellType: 'checkbox'
                }
              ],
              choices: ['AV'],
              rows: [
                'Morning  (9 to Noon)',
                'Afternoon (Noon to 3)',
                'Evening (3 to 6)'
              ]
            }
          ],
          visibleIf: '{clientOrTherapistQ} = "therapist"',
          title: 'Logistics'
        },
        {
          type: 'panel',
          name: 'clientLogisticsPanel',
          elements: [
            {
              type: 'text',
              name: 'specialtyQ',
              title: 'What specialty are you looking for?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'insuranceQ',
              title: 'What is your insurance?',
              isRequired: true
            },
            {
              type: 'rating',
              name: 'affordQ',
              title: 'What are you willing to afford per meeting?',
              isRequired: true,
              rateValues: [
                {
                  value: 1, text: '50'
                },
                {
                  value: 2, text: '100'
                },
                {
                  value: 3, text: '150'
                },
                {
                  value: 4, text: '200'
                },
                {
                  value: 5, text: '250'
                }
              ]
            },
            {
              type: 'matrixdropdown',
              name: 'clientAvailabilityQ',
              title: 'When are you available to meet?',
              isRequired: true,
              columns: [
                {
                  name: 'Sunday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Monday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Tueday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Wednesday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Thursday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Friday',
                  cellType: 'checkbox'
                },
                {
                  name: 'Saturday',
                  cellType: 'checkbox'
                }
              ],
              choices: ['AV'],
              rows: [
                'Morning  (9 to Noon)',
                'Afternoon (Noon to 3)',
                'Evening (3 to 6)'
              ]
            }
          ],
          visibleIf: '{clientOrTherapistQ} = "client"',
          title: 'Logistics'
        },
        {
          type: 'panel',
          name: 'locationPanel',
          elements: [
            {
              type: 'text',
              name: 'locationQ',
              title: 'How far are you willing to travel?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'zipcodeQ',
              title: 'What is your zip code?',
              isRequired: true
            }
          ],
          visibleIf: '{clientOrTherapistQ} = "client"',
          title: 'Location'
        }
      ]
    },
    {
      name: 'matching',
      elements: [
        {
          type: 'panel',
          name: 'clientMatchingPanel',
          elements: [
            {
              type: 'comment',
              name: 'wantFromTherapyQ',
              title: 'What do you want out of therapy?',
              isRequired: true
            },
            {
              type: 'matrixdropdown',
              name: 'personality5TraitsQ',
              title: 'Describe your personality in five traits:',
              isRequired: true,
              columns: [
                {
                  name: 'Trait 1',
                  cellType: 'text',
                  isRequired: true
                },
                {
                  name: 'Trait 2',
                  cellType: 'text',
                  isRequired: true
                },
                {
                  name: 'Trait 3',
                  cellType: 'text',
                  isRequired: true
                },
                {
                  name: 'Trait 4',
                  cellType: 'text',
                  isRequired: true
                },
                {
                  name: 'Trait 5',
                  cellType: 'text',
                  isRequired: true
                }
              ],
              choices: [1, 2, 3, 4, 5],
              rows: ['Traits']
            },
            {
              type: 'comment',
              name: 'personGetAlongWithQ',
              title: 'Describe the type of person you get along with:',
              isRequired: true
            },
            {
              type: 'radiogroup',
              name: 'writeReviewQ',
              title: 'Are you willing to write a review after meeting a therapist?',
              isRequired: true,
              choices: [
                {
                  value: 'item1',
                  text: 'Yes'
                },
                {
                  value: 'item2',
                  text: 'No'
                }
              ]
            },
            {
              type: 'radiogroup',
              name: 'therapyBeforeQ',
              title: 'Have you been to therapy before?',
              isRequired: true,
              choices: [
                {
                  value: 'item1',
                  text: 'Yes'
                },
                {
                  value: 'item2',
                  text: 'No'
                }
              ]
            },
            {
              type: 'checkbox',
              name: 'certainCriteriaQ',
              title: 'Is there certain criteria you want in your therapist?',
              isRequired: false,
              choices: [
                {
                  value: 'gender',
                  text: 'Gender'
                },
                {
                  value: 'age',
                  text: 'Age'
                },
                {
                  value: 'ethnicity',
                  text: 'Ethnicity'
                },
                {
                  value: 'other',
                  text: 'Other'
                }
              ]
            },
            {
              type: 'radiogroup',
              name: 'preferredGenderQ',
              visibleIf: '{certainCriteriaQ} contains "gender"',
              title: 'Preferred Gender of Therapist:',
              choices: [
                {
                  value: 'male',
                  text: 'Male'
                },
                {
                  value: 'female',
                  text: 'Female'
                },
                {
                  value: 'nonbinary',
                  text: 'Nonbinary'
                }
              ]
            },
            {
              type: 'text',
              name: 'preferredAgeQ',
              visibleIf: '{certainCriteriaQ} contains "age"',
              title: 'Preferred Age of Therapist:'
            },
            {
              type: 'dropdown',
              name: 'preferredEthnicityQ',
              visibleIf: '{certainCriteriaQ} contains "ethnicity"',
              title: 'Preferred Ethnicity of Therapist:',
              choices: [
                {
                  value: 'americanIndian',
                  text: 'American Indian or Alaska Native'
                },
                {
                  value: 'asian', text: 'Asian'
                },
                {
                  value: 'black',
                  text: 'Black or African American'
                },
                {
                  value: 'hispanic',
                  text: 'Hispanic or Latino'
                },
                {
                  value: 'nativeHawaiian',
                  text: 'Native Hawaiian or Other Pacific Islander'
                },
                {
                  value: 'white',
                  text: 'White'
                }
              ]
            },
            {
              type: 'text',
              name: 'otherCriteriaQ',
              visibleIf: '{certainCriteriaQ} contains "other"',
              title: 'Other Criteria:'
            }
          ],
          visibleIf: '{clientOrTherapistQ} = "client"',
          title: 'Matching'
        },
        {
          type: 'panel',
          name: 'therapistMatchingPanel',
          elements: [
            {
              type: 'text',
              name: 'wantInClientQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'What do you want in a client?',
              isRequired: true
            },
            {
              type: 'text',
              name: 'notWantInClientQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'What do you not want in a client?',
              isRequired: true
            },
            {
              type: 'multipletext',
              name: 'therapistPersonalityQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'Describe your personality in five adjectives:',
              items: [
                {
                  name: 'First Adjective'
                },
                {
                  name: 'Second Adjective'
                },
                {
                  name: 'Third Adjective'
                },
                {
                  name: 'Fourth Adjective'
                },
                {
                  name: 'Fifth Adjective'
                }
              ]
            },
            {
              type: 'comment',
              name: 'approachToTherapyQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'Describe your approach to therapy:',
              isRequired: true
            },
            {
              type: 'radiogroup',
              name: 'reduceRatesQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'Are you willing to reduce rates?',
              isRequired: true,
              choices: ['Yes', 'No']
            },
            {
              type: 'radiogroup',
              name: 'afterHoursQ',
              visibleIf: '{clientOrTherapistQ} = "therapist"',
              title: 'Are you available after hours?',
              isRequired: true,
              choices: ['Yes', 'No']
            }
          ],
          visibleIf: '{clientOrTherapistQ} = "therapist"',
          title: 'Matching'
        }
      ]
    }
  ]
};


function sendDataToServer(survey) {
    // send Ajax request to your web server.
    alert('The results are:' + JSON.stringify(survey.data));
    this.http.post('URL HERE',
      JSON.stringify(survey.data))
      .subscribe(
        (val) => {
          console.log('POST call successful value returned in body',
            val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });

}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const survey = new Model(surveyJSON);
    survey.onComplete.add(sendDataToServer);
    SurveyNG.render('surveyElement', { model: survey });
  }

}
