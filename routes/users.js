const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs/dist/bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config')
const { body, validationResult } = require('express-validator');


const User = require('../models/User');
// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',

  // checking that there is name, email and password / validation
  [
    body('name', 'name is required').not().isEmpty(),
    body('email', 'please include a valid email').isEmail(),
    body(
      'password',
      'Please enter a password with atleast 6 characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // check if user exists with email
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password,
      });

      // using salt to encrypt password using bcrypt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // creating user payload to be able to get the users contacts etc
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      }, (err, token) => {
        if (err) throw err;
        res.json({ token })
      })
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }

    /*  User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then(user => res.json(user)); */
  }
);

module.exports = router;
