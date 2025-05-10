const express = require('express');
const { register, login } = require('../controller/userCon');
const { check } = require('express-validator');

const router = express.Router();

router.post('/register', [
  check('name').notEmpty(),
  check('email').isEmail(),
  check('phone').notEmpty(),
  check('password').isLength({ min: 6 })
], register);

router.post('/login', login);

module.exports = router;
