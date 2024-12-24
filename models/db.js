const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '2024',
  database: 'microblog',
});

module.exports = pool;

