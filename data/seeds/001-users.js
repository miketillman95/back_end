
exports.seed = function(knex) {
  // 000-cleanup.js already cleaned out all the tables
  
      // Inserts seed entries
      return knex('users').insert([
        { username: 'loki', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'loki@marvel.com'},
        { username: 'cyclops', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'cyclops@marvel.com'},
        { username: 'sylvie', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'sylvie@marvel.com'},
        { username: 'jeangray', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'jeangray@marvel.com'},
        { username: 'user', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'user@lambda.com'},
        { username: 'admin', password: '$2a$08$O7VVzxSTIx0UDyT/LWOiOeb5ZVOaZXcbxoJzFpORgJ6dOEGE4EHqq', email: 'admin@lambda.com'}
      ]);
    
};
