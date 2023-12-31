/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username', 255).notNullable();
        table.string('password', 255).notNullable();
        table.string('profile_photo', 255);
        table.string('location', 255);
        table.string('email', 255).unique().notNullable();
        table.timestamp(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
