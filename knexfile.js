module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'graphql_study',
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.STAGING_HOST || 'localhost',
      user: process.env.STAGING_USER || '',
      password: process.env.STAGING_PASSWORD || '',
      database: process.env.STAGING_DATABASE || 'graphql_study',
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
      host: process.env.PRODUCTION_HOST || 'localhost',
      user: process.env.PRODUCTION_USER || '',
      password: process.env.PRODUCTION_PASSWORD || '',
      database: process.env.PRODUCTION_DATABASE || 'graphql_study',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
