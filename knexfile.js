// Update with your config settings.

module.exports = {
  // configuration for a development database
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/veggies.db3", // change the path
    },
    useNullAsDefault: true, // needed only for SQLite
    migrations: {
      directory: "./data/migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  // configuration for a production database
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
