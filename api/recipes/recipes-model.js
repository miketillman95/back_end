const db = require('../../data/dbConfig')

// fix add model, getting 500 error

function add(recipe){
  return db('recipes')
  .insert(recipe, "user_id");
}
 
const find = () => {
    return db('recipes')
}

const findById = (recipe_id) =>{
    return db('recipes')
    .where({recipe_id})
    .first()
}


const remove = (recipe_id) =>{
    return db('recipes')
    .where({recipe_id})
    .del()
}

const update = (recipe_id, changes) => {
    return db('recipes')
    .where({recipe_id})
    .update(changes, '*')
}
module.exports = {
    add,
    findById,
    find,
    update, 
    remove
}