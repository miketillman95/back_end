const router = require("express").Router();
// const { checkUsernameExists, validateRoleName } = require('./auth-middleware');
// const { JWT_SECRET } = require("../auth/secrets"); // use this secret!

// Bring in Users model
const Users = require('../users/users-model')

//Bring in bcrypt
const bcrypt = require('bcryptjs')

// Bring in json web token
const jwt = require('jsonwebtoken')

router.post("/register", (req,res) => {

  let user = req.body;

  const rounds = process.env.BCRYPT_ROUNDS || 8;

  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash

  Users.add(user)
    .then(saved => {
      res.status(201).json({ message: `Welcome back, ${saved.username}`})
    })
    .catch(e =>{ console.log(e)})
})







module.exports = router;