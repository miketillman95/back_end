
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'yummy', source: 'mom', category: 'broil'},
        {recipe_id: 2, recipe_name: 'greaty', source: 'dad', category: 'fry'},
        {recipe_id: 3, recipe_name: 'deliciousy', source: 'gramps', category: 'bake'}
      ]);
    });
};

// cant seed running knex:seed
