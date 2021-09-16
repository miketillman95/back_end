const router = require("express").Router();
const { checkAuthPayload, checkUsernameExists } = require('./auth-middleware');
const { JWT_SECRET } = require("../auth/secrets/index"); // use this secret!

// Bring in Users model
const Users = require('../users/users-model')

//Bring in bcrypt
const bcrypt = require('bcryptjs')

// Bring in json web token
const jwt = require('jsonwebtoken')



// register endpoint
router.post("/register", checkAuthPayload, (req,res, next) => {

  let user = req.body;

  const rounds = process.env.BCRYPT_ROUNDS || 8;

  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash

  Users.add(user)
    .then(saved => {
      res.status(201).json({ message: `Welcome to your recipes, ${saved.username}!`})
    })
    .catch(next)
})


// login endpoint
router.post('/login', checkAuthPayload, checkUsernameExists, (req, res, next) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .then(([user])=> {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = makeToken(user)
        res.status(200).json({
          message: `Welcome back, ${user.username}!`,
          token
        })
      }
      else{
        next ({status: 401, message: "invalid credentials"})
      }
    }) 
    .catch(next)
})

// logout endpoint
// router.post("/logout", async (req, res, next) => {
// 	try {
// 		req.session.destroy((err) => {
// 			if (err){
// 				next(err)
// 			} else {
// 				res.status(204).end()
// 			}
// 		})
		
// 	} catch (err) {
// 		next(err)
// 	}
// })

// make token
function makeToken(user){
  //give payload as an object
  const payload ={
    subject: user.user_id,
    username: user.username,
    role_name: user.role_name
  }

  const options = {
    expiresIn: "1d"
  }

  return jwt.sign(payload, JWT_SECRET, options )
}


module.exports = router;