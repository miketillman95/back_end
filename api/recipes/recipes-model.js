const db = require('../../data/dbConfig')

// fix add model, getting 500 error
const add = async(newUser)=> {
    const [id] = await db('recipes')
    .insert(newUser).returning('recipe_id')
    return findById(id)
}

const find = () => {
    return db('recipes')
}

const findById = (recipe_id) =>{
    return db('recipes')
    .where({recipe_id})
    .first()
}

//model works but gives 500 error
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