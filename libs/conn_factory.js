const pg = require('pg');
const connString = "postgres://postgres:12345@banco-loja:5432/loja";

let single_connection;

function factory() {
  single_connection = pg.connect(connString);
  return single_connection;
}

module.exports = () => {
  return factory;
}
