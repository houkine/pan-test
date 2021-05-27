var config = {

  name: "pan test",

  description: "a test",

  contributors: "Pan",

  //others

  // Server configuration
  server_port: "3000",

  // db configuration
  db_name: "mysql",
  db_host: "localhost",
  db_user: "root",
  db_port: '3306',
  db_password: '1234',
  // db_port: "3309",
  // db_password: "root",
  db_database: "pan_test",
  db_url: "",
  db_maxPooling: 10,
  db_minPooling: 2,

  // JWT token
  // JWT_secretKey: "secret key",
  // JWT_expires_in: 60 * 60 * 24 * 1000,

  // bcrypt
  // bcrypt_saltRounds: 10,

  // morgan
  // morgan_logFilePath: "../access.log",
};

module.exports = config;
