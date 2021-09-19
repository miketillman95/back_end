
exports.seed = function(knex) {
    // 000-cleanup.js already cleaned out all the tables

      // Inserts seed entries
      return knex('recipes').insert([
        {user_id: 1, recipe_id: 1, recipe_name: 'yummy', source: 'mom', category: 'broil'},
        {user_id: 2, recipe_id: 2, recipe_name: 'greaty', source: 'dad', category: 'fry'},
        {user_id: 1, recipe_id: 3, recipe_name: 'deliciousy', source: 'gramps', category: 'bake'}
      ]);
   
};

// cant seed running knex:seed
