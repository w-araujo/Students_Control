
exports.up = function (knex) {
  return knex.schema.createTable('students', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('lastname').notNullable();
    table.decimal('age').notNullable();
    table.string('email').notNullable();
    table.string('address').notNullable();

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('students');
};
