
exports.seed = function(knex) {
  // 000-cleanup.js already cleaned out all the tables
  
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, username: 'loki', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'loki@marvel.com'},
        {user_id: 2, username: 'cyclops', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'cyclops@marvel.com'},
        {user_id: 3, username: 'sylvie', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'sylvie@marvel.com'},
        {user_id: 4, username: 'jeangray', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'jeangray@marvel.com'},
        {user_id: 5, username: 'user', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'user@lambda.com'},
        {user_id: 6, username: 'admin', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'admin@lambda.com'}
      ]);
    
};
