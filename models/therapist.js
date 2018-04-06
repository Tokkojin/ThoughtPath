var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  };
  
  var therapistSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true},
    gender: String,
    age: String,
    ethnicity: String,
    availability: [{type: String}],
    yearsPracticing: String,
    educationBackground: String,
    dateLastClass: String,
    specialty: String,
    insurancePanels: String,
    wantInClient: String,
    notWantInClient: String,
    personality: [{type: String}],
    approachToTherapy: String,
    reduceRates: String,
    afterHours: String

  }, schemaOptions);

  var Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;