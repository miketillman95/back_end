
exports.seed = function(knex) {
  // 000-cleanup.js already cleaned out all the tables
  
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, username: 'loki', password: 'password', email: 'loki@marvel.com'},
        {user_id: 2, username: 'cyclops', password: 'password', email: 'cyclops@marvel.com'},
        {user_id: 3, username: 'sylvie', password: 'password', email: 'sylvie@marvel.com'},
        {user_id: 4, username: 'jeangray', password: 'password', email: 'jeangray@marvel.com'},
        {user_id: 5, username: 'user', password: 'password', email: 'user@lambda.com'},
        {user_id: 6, username: 'admin', password: 'password', email: 'admin@lambda.com'}
      ]);
    
};
