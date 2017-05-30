module.exports = app => {
  const ProdutoModel = app.models.produto;

  const ProdutoController = {
    retrieve: (req, res) => {
      ProdutoModel.retrieve((err, result) => {
        if(err) return res.status(500).json({ "Error": err })
        res.status(200).json(result.rows);
      });
    }
  }

  return ProdutoController;
}
