// Update with your config settings.

module.exports = {

  user: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/userDB.sqlite3'
    },
    migrations: {
      directory: './src/database/migrations/user'
    },
    useNullAsDefault: true,
  },

  silogism: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/silogismDB.sqlite3'
    },
    migrations: {
      directory: './src/database/migrations/silogism'
    },
    useNullAsDefault: true,
  },
  
};
