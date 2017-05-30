# docker-nodejs-postgres
## Exemplo de aplicação web Node.js com Docker e Postgres

## Rodando a aplicação
1: Construa a imagem do banco
```
    docker build -t <uname>/banco ./postgres
```
2: Execute o container do banco
```
    docker run -p 5434:5432 -d --name banco <uname>/banco
```
3: Construa a imagem da aplicação
```
    docker build -t <uname>/node_app .
```
4: Execute o container da aplicação
```
    docker run -p 3001:3000 -d --name napp --link banco:banco-loja <uname>/node_app
```
5: Em seu navegador, acesse:
```
    localhost:3001/produto
```
