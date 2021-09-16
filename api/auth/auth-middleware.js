const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../auth/secrets/index"); // use this secret!
const Users = require("../users/users-model")

// restricted (for protected route, the recipes)
const restricted = (req, res, next) => {
  const token = req.headers.authorization
  if(!token){
    res.status(401).json("Token required")
  }
  else{
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if(err){
        res.status(401).json("Token invalid")
      }
      else{
        req.decodedToken = decoded
        next()
      }
    });
  }
}

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

// check to see if username is already in the database
const checkUserInDB = async (req,res,next)=>{
  try{
    // call it rows for a better convention in databases
      const rows = await Users.findBy({username:req.body.username})
      if(!rows.length){
        next()
      }
      else{
        res.status(401).json("Username already exists")
      }
      
  }catch(e){
      res.status(500).json(`Server error: ${e}`)
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
  restricted,
  checkAuthPayload,
  checkUserInDB,
  checkUsernameExists
}