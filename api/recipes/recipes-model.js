const db = require('../../data/dbConfig')

const add = async(newUser)=> {
    const [id] = await db('recipes').insert(newUser)
    return findByRecipesId(id)
}

const findUsers = () => {
    return db('recipes')
}

const findRecipesById = (id) =>{
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
    findRecipesById,
    findUsers,
    update
}