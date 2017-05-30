module.exports = app => {
  const conn = app.libs.conn_factory();

  const ProdutoModel = {
    retrieve: (callback) => {
      conn.then(client => {
        client.query('select * from produto', callback);
      });
    }
  }

  return ProdutoModel;
}
