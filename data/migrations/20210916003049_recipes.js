
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl =>{
    tbl.increments("recipe_id")
    tbl.integer('user_id')
    .unsigned()// can't be a negative number
    .notNullable()
    .references("user_id")// what column is this referrring to? user_id in users table
    .inTable("users")
    .onDelete("CASCADE")
    tbl.string("recipe_name", 128).notNullable()
    tbl.string("source", 128).notNullable()
    tbl.string("category", 128).notNullable()
    tbl.string("instructions", 128).notNullable()
    tbl.string("ingredients", 128).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipes")
};