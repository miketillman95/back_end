const db = require('../../data/dbConfig')

// fix add model, getting 500 error

function add(recipe){
  return db('recipes')
  .insert(recipe, "user_id");
}
 
const find = () => {
    return db('recipes')
}

const findById = (id) =>{
    return db('recipes')
    .where({id})
    .first()
}


const remove = (id) =>{
    return db('recipes')
    .where({id})
    .del()
}

const update = (id, changes) => {
    return db('recipes')
    .where({id})
    .update(changes, '*')
}
module.exports = {
    add,
    findById,
    find,
    update, 
    remove
}