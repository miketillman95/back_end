
exports.seed = function(knex) {
  // 000-cleanup.js already cleaned out all the tables
  
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    
};
