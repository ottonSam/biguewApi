
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('user_id').primary();
        table.string('user_name').notNullable();
        table.string('user_email').notNullable();
        table.string('user_senha').notNullable();
        table.integer('user_idade');
        table.integer('user_inativo', 1);
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
 