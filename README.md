# Japanese Study

## Description

Application to learn Japanese conveniently and effectively. Helping users to gain the full amount of knowledge to take the Jlpt exam.

## Installation

```bash
$ yarn install
```

## Running the app

### Prerequisites:
- Docker
- Docker-compose

### Start app for development:
- Copy .env.example to .env, development.env
- Edit mapping port, environment if need
- Run ```bash docker-compose up```
- Open [http://localhost:{HTTP_PORT}/docs](http://localhost:{HTTP_PORT}/docs)

### Migrate database:
```bash
# run migrate
$ docker-compose exec app yarn migrate:all
# revert migrate
$ docker-compose exec app yarn migrate:undo
```

```bash
# development
$ yarn start
# watch mode
$ yarn start:dev
# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test
# e2e tests
$ yarn test:e2e
# test coverage
$ yarn test:cov
```

## Stay in touch

- Author - [Nhat Ngo Sach](https://www.facebook.com/NhatMinhUET)
- Author - [Son Thanh Nguyen](https://www.facebook.com/loganbeast189)
