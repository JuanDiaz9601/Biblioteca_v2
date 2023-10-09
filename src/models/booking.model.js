const  { Schema, model } = require('mongoose');


const BookingModel = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    isActive: { type: Schema.Types.Boolean, required: true, default: true },
    startDate: { type: Schema.Types.Date, required: true },
    endDate: { type: Schema.Types.Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    book: { type: Schema.Types.ObjectId, ref: 'Books', required: true },
});

module.exports = model('Booking', BookingModel);