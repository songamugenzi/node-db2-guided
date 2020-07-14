// this function describes the changes we want to make
exports.up = function (knex) {
  return knex.schema.createTable("veggies", (tbl) => {
    // creates a primary key that auto-increments
    tbl.increments("id");

    // add a string (varchar) column up to 128 characters long
    // should not allow duplicate values and be required (not NULL)
    tbl.string("veggie_name", 128).unique().notNullable();
  });
};

// this function describes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("veggies");
};
