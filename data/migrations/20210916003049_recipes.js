
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl =>{
    tbl.increments()
    tbl.integer('user_id')
    .unsigned()// can't be a negative number
    .notNullable()
    .references("id")// what column is this referrring to? user_id in users table
    .inTable("users")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
    tbl.string("recipe_name", 128).notNullable()
    tbl.string("source", 128).notNullable()
    tbl.string("category", 128).notNullable()
    tbl.string("instructions", 128).notNullable()
    tbl.string("ingredients", 128).notNullable()
  })
  .createTable("users_recipes", tbl => {
    tbl.increments();
    tbl.integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    tbl.integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("users_recipes")
  .dropTableIfExists("recipes")
};