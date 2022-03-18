# Subjects SPA's

SPA that allows me to manage my university subjects by means of a CRUD coded with ExpressJS + Sequelize. In order to create a new subject, type the subject's name on the field and press `ENTER` to add it. To delete it, click onto it.

![SPA image](./image.PNG)

This project was bootstrapped with ReactJS.

## How to run this project

This repository bear the server and client side of thie system. In order to run the server-side, one must fill `.env.local` with these follow credentials.

```
PROJECT_NAME=
DB_PASS=
DB_PORT=
DB_HOST=
DB_USER=
```

One must be a MySQL, PostgresSQL, MariaDB, etc. to work. With this finished, just run

```
yarn dev
```

For starting the Node.js server framework. At last, go to the *client* folder and run the above command to initialize the client application

```
yarn start
```

You should see the application running on [this link](http://localhost:3000)