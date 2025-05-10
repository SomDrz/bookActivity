const express = require('express');
const auth = require('../middleware/verify');
const { CreateActivities,listActivities, bookActivity, getMyBookings } = require('../controller/activityController');

const router = express.Router();
router.post('/create', CreateActivities);

router.get('/', listActivities);
router.post('/book/:id',auth, bookActivity);
router.get('/my-bookings', auth, getMyBookings);

module.exports = router;
