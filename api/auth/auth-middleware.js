// const jwt = require("jsonwebtoken")
// const { JWT_SECRET } = require("../auth/secrets/index"); // use this secret!
const Users = require("../users/users-model")

// restricted (for protected route, the recipes)

// checkAuthPayload - checks to make sure required fields are filled out
const checkAuthPayload = (req, res, next) => {
  const { username, password } = req.body

  if(!username || !password) {
    res.status(401).json("Username or password required")
  }
  else{
    next()
  }
}

// check to see if username exists

const checkUsernameExists = async (req, res, next) => {


  try {
    const rows = await Users.findBy({username:req.body.username})

    if(rows.length) {
      req.userData = rows[0]

      next()
    }
    else{
      res.status(401).json("Invalid credentials")
    }
  }
  catch(e){
    res.status(500).json(`Server error ${e}`)
  }
}


module.exports = {
  checkAuthPayload,
  checkUsernameExists
}