## My Brand BackEnd Server App & DataBase Connection

## My Brand UI Template Is Hosted [here](https://marthatwesi.github.io/Back_end/) On Gh-Pages.

## My Brand API Endpoints Are Hosted On [Cyclic.sh](https://).

### Available API Endpoints

| HTTP Request | Endpoint               | Description                        |
| :----------- | :------------------    | :-----------------------------     |
| GET          | /api-docs              | Link To The Documentation          |
| POST         | /signup/admin          | User Create An Admin Account       |
| POST         | /signup                | User Create An Account             |
| GET          | /signup                | Admin Gets All Signed Up Users.    |
| POST         | /login                 | User Logs In                       |
| GET          | /messages              | Admin Gets All Queries             |
| POST         | /message               | User Creates Query                 |
| DELETE       | /message/:id           | Admin Deletes Query                |
| GET          | /articles              | User Gets All articles             |
| GET          | /articles/:id          | User Gets Single articles          |
| GET          | /articles/:id/comments | User Gets All Comments On articles |
| POST         | /articles              | Admin Creates articles             |
| POST         | /articles/:id/comments | User Comments On articles          |
| POST         | /articles/:id/stats    | User Likes Or Unlikes articles     |
| PUT          | /articles/:id          | Admin Updates articles             |
| DELETE       | /articles/:id          | Admin Deletes articles             |

## To Install The App

```sh
$ git clone https://github.com/Marthatwesi/Back_end.git
$ cd bcp
$ npm install
```

## To Run The App

```sh
$ npm run dev
```

## To Run The Test

```sh
$ npm run test
```

## Technologies Used For The App

#### Built With

- [Nodejs](https://www.nodejs.org)
- [Expressjs](https://www.expressjs.com)

#### Unit Tested With

- [Jest](https://jestjs.io/) And [Supertest](https://www.npmjs.com/package/supertest)

#### Continuous Integration And Test Coverage

- [CircleCi](https://www.circleci.com) For The CI
- [Coveralls](https://www.coveralls.io) For The Test Coverage

## Author:

#### Martha Twesigye
