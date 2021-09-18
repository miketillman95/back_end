
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl =>{
    tbl.increments("recipe_id")
    tbl.string("title", 128).notNullable().unique()
    tbl.string("source", 128).notNullable().unique()
    tbl.string("category", 128).notNullable().unique()
  })
  .createTable("instructions", tbl => {
    tbl.increments("instruction_id")
    tbl.string("instructions", 128).notNullable().unique()
    tbl.integer("number_of_steps")
    .unsigned()
    .notNullable()
    tbl.integer("recipe_id")
    .unsigned()// can't be a negative number
    .notNullable()
    .references("recipe_id")// what column is this referrring to?
    .inTable("recipes")
    .onDelete("RESTRICT")// referential integrity    
  })
  .createTable("ingredients", tbl => {
    tbl.increments("ingredient_id")
    tbl.string("ingredient_name", 128)
  })
  .createTable("recipe_ingredients", tbl => {
    tbl.increments("recipe_ingredient_id")
    tbl.integer("instruction_id")
      .unsigned()// can't be a negative number
      .notNullable()
      .references("instruction_id")// what column is this referrring to?
      .inTable("instructions")
      .onDelete("CASCADE")// referential integrity  
    tbl.integer("ingredient_id")
      .unsigned()// can't be a negative number
      .notNullable()
      .references("ingredient_id")// what column is this referrring to?
      .inTable("ingredients")
      .onDelete("CASCADE")// referential integrity  
    tbl.decimal("quantity")
       
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipe_ingredients")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("instructions")
  .dropTableIfExists("recipes")
};