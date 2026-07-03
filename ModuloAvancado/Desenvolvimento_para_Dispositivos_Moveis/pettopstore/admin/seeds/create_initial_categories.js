exports.seed = function(knex) {

  return knex('categories').del()
    .then(function () {
  
      return knex('categories').insert([
        { name: 'Alimentos' },
        { name: 'Brinquedos' },
        { name: 'Animais' }
      ]);
    });
};