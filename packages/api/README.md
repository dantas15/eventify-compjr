## como executar

- rode `yarn` na raíz do projeto
- crie um arquivo `.env` baseado no `.env.example`.
- aqui será preciso utilizar MongoDB, você tem algumas opções:
  - Crie um no [MongoDB Atlas](https://www.mongodb.com/pt-br/atlas) e adapte a url no `.env`
  - ou você pode utilizar o docker, mais info [aqui](#comandos-úteis)
- inicie o servidor:
  ```bash
    yarn dev
  ```

## comandos úteis
  - iniciar o container do mongo:

    ```bash
    docker-compose up -d
    ```

  - parar o container do mongo:

    ```bash
    docker-compose down
    ```
