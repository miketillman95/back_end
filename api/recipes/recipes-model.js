const db = require('../../data/dbConfig')

const add = async(newUser)=> {
    const [id] = await db('recipes').insert(newUser).returning('recipe_id')
    return findById(id)
}

const find = () => {
    return db('recipes')
}

const findById = (recipes_id) =>{
    return db('recipes')
    .where({recipes_id})
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