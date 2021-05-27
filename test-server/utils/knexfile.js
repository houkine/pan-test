// Update with your config settings.
const config =require('../config');
module.exports = {

  development: {
    client: config.db_name,
    connection: {
      host : config.db_host,
      port: config.db_port,
      user : config.db_user,
      password : config.db_password,
      database : config.db_database
    },
    pool: { min: config.db_minPooling, max: config.db_maxPooling }
  },
/*
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
*/
};
