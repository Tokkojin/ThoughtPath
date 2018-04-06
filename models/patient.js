var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  };
  
  var patientSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true},
    preferReachOut: String,
    gender: String,
    availability: [{type: String}],
    specialtyDesire: String,
    insurance: String,
    rate: String,
    travelDistance: String,
    location: String,
    wantFromTherapy: String,
    personality: [{type: String}],
    getsAlongWith: String,
    writeReview: String,
    previousTherapy: String,
    therapistCriteria: [{type: String}]
  }, schemaOptions);

  var Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;