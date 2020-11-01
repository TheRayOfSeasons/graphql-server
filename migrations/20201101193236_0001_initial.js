exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('todos', function (table) {
      table.increments();
      table.string('name');
      table.string('content');
      table.timestamps();
    }),
  ])
};

exports.down = function(knex) {

};
