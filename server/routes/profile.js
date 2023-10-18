const express = require('express');
const router = express.Router();
const passport = require('passport'); // Ensure user authentication before accessing profiles

// Import your User and Profile models
const User = require('../models/User');
const Profile = require('../models/Profile');

// Get user profile
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const userProfile = await Profile.findOne({ user: req.user._id });
      if (!userProfile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
      res.json(userProfile);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user profile' });
    }
  }
);

// Create or update user profile
router.post(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { firstName, lastName, phoneNumber, bio } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user._id;
    if (firstName) profileFields.firstName = firstName;
    if (lastName) profileFields.lastName = lastName;
    if (phoneNumber) profileFields.phoneNumber = phoneNumber;
    if (bio) profileFields.bio = bio;

    try {
      let userProfile = await Profile.findOne({ user: req.user._id });

      if (userProfile) {
        // Update existing profile
        userProfile = await Profile.findOneAndUpdate(
          { user: req.user._id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(userProfile);
      }

      // Create new profile if it doesn't exist
      userProfile = new Profile(profileFields);
      await userProfile.save();
      res.json(userProfile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
