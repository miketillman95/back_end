const Recipes = require('./recipes-model')
const router = require('express').Router()
// works
router.get('/', (req, res) => {
    Recipes.find(req.query)
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({
            message: 'canot get recipes'
        })
    })

}) // return an array of all items

//works
router.get('/:id', (req, res) => {
    Recipes.findById(req.params.id)
    .then(recipes => {
        if(recipes) {
            res.status(200).json({recipes})
        } else {
            res.status(404).json({
                message: 'Recipe not found'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error retrieving recipe'
        })
    })
});  // return the item object with the matching id (working)


router.post('/', (req, res) => {
    Recipes.add(req.body)
    .then(recipes => {
        console.log("------------",req.body)
        res.status(201).json(recipes)
    })
    .catch(error => {
      console.log("------------",req.body)
        res.status(500).json({
        message: 'Error adding the recipe',
        });
  });
}) // return the added item object

// works
router.delete('/:id', (req, res) => {
    Recipes.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({
                message: 'Recipe has been removed'
            }) 
        } else {
            res.status(404).json({
                message: 'Recipe cannot be found'
            })
        }
    })
    .catch(error => {
        res.status(500).json({
        message: 'Error removing the item',
        });
  });
})

// works
router.put('/:id', (req, res) => {
   const changes = req.body
    Recipes.update(req.params.id, changes)
    .then(recipes => {
        if(recipes) {
            res.status(200).json({
                message: 'Recipe has been updated'
            })
        } else {
            res.status(404).json({
                message: 'Recipe could not be found'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error updating recipe'
        })
    })
}) // returns item object

module.exports = router

