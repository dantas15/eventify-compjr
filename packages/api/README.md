## instructions

- install all dependencies on the root folder of this monorepo with `yarn bootstrap`
- create a `.env` file on `packages/api` with the content inside `.env.example`
- in order to run the database with docker-compose, you should know a few stuff:
  - the data will be stored in the `data` folder, but it will be ignored by git
- useful commands:
  - start the database in detached mode:

    ```bash
    docker-compose up -d
    ```

  - stop the database:

    ```bash
    docker-compose down
    ```
