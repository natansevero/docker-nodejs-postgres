module.exports = app => {
  const ProdutoController = app.controllers.produto;

  app.get('/produto', ProdutoController.retrieve);
}
