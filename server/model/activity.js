const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: { type: String},
  description:  { type: String},
  location:  { type: String},
  datetime: { type: Date},
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Activity', activitySchema);
