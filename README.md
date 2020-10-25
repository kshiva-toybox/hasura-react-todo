# React Hasura TODO
Hasura GraphQL Engine, React + Apollo Client

## Setup
### hasura
```
$ yarn
$ docker-compose up -d
$ yarn hasura migrate apply --project hasura
$ yarn hasura console --project hasura
```

### React
```
$ cd ./client
$ yarn
$ yarn hasura seeds apply --project hasura
$ yarn start
```

## Demo
![tasklist-demo](https://user-images.githubusercontent.com/42695879/97109196-20faee00-1715-11eb-9c1e-c88c33dc8bf5.gif)
