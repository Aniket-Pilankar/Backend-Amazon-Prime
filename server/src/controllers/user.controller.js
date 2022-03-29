const User = require('../models/user.model')
const router = require('express').Router();
const { body, validationResult } = require('express-validator')
const authenticate=require('../middlewares/authenticate')
// const authorise=require('../middlewares/authorise')

router.get('', authenticate, async(req, res) => {
  try {
    const users = await User.find();
    res.status(201).send(users)
  } catch (e) {
    res.status(500).send(e)
  }
})

// router.post('',
// body('name')
//     .notEmpty()
//   .withMessage('Name cannot be empty!'),
// body('email')
//     .isEmail()
// .withMessage('Not  a valid Email!'),
//   async (req, res) => {
//   

module.exports = router;