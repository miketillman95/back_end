const router = require("express").Router();


const registeredUser = {
  username: "Bobby",
  password: "hellothere",
  email: "email@email.com"
}





router.post("/register", (req , res, next) => {
  try{
    res.status(201).json({ message: `You've been registered, ${registeredUser.username}!`})
  }
  catch(e){
    next(e.message)
  }
})


router.post("/login", (req , res, next) => {
  try{
    res.status(201).json({message: `Welcome back, ${registeredUser.username}`})
  }
  catch(e){
    next(e.message)
  }
})


module.exports = router 