# Clocking Tracker App

An app to track your working hours.

<img alt="login" src="docs/screenshots/login.png" style="width: 180px;" />
<img alt="signup" src="docs/screenshots/signup.png" style="width: 180px;" />
<img alt="clocking-list" src="docs/screenshots/clocking-list.png" style="width: 180px;" />
<img alt="create-clock" src="docs/screenshots/create-clock.png" style="width: 180px;" />
<img alt="edit-clocking" src="docs/screenshots/edit-clocking.png" style="width: 180px;" />
<img alt="edit-profile" src="docs/screenshots/edit-profile.png" style="width: 180px;" />
<img alt="dark-theme-clocking" src="docs/screenshots/dark-theme-clocking.png" style="width: 180px;" />
<img alt="dark-theme-profile" src="docs/screenshots/dark-theme-profile.png" style="width: 180px;" />

## Description

This app is a simple app that will help you calculate your working hours in a day
and will give you a summary of how many hours are you working in a month.

## Installation

```bash
$ yarn install && cd client && yarn install && cd ..

# copy .env.example to .env
cp .env.example .env
```

### Env vars

Configure the variables on the `.env` file for the database connection and a key
to your JWT tokens signature. See the `.env.example` file.

## Running the app

```bash
# development
$ npm run start
```

## Test Backend

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Test Frontend

```bash
$ cd client
$ npm run test
```

## Build

```bash
# build both api and frontend
$ npm run build:full

# run production build on local machine
$ npm run start:prod
```

## Stack

### Frontend

- React
- styled-components
- redux
- redux-saga
- reselect
- immer
- axios
- react-router
- moment
- jest

### Backend

- Nestjs
- Typescript
- Mongoose
- passport

## License

[MIT licensed](LICENSE).
