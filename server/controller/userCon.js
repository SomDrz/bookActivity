const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exist' });

    user = new User({ name, 
      email,
       phone,
      password: await bcrypt.hash(password, 10) });
    await user.save();

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '5h' });

    res.json({ token });
  } catch (err) {
    console.error()
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user){
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });

    }
    const data = { user: { id: user.id } };
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '5h' });

    res.json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
};


module.exports ={register,login}