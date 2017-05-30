module.exports = app => {
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
  });
}
