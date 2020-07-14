
exports.up = function(knex) {
  return knex.schema.createTable("veggies", tbl => {
      tbl.increments("id");
      tbl.string("name", 128).unique().notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("veggies");
};
