# Express + Passport + Mongoose REST API Template

Boilerplate code for building REST APIs using Node JS and MongoDB. 

### Features:
* Basic user management enpoints included (```/register``` and ```/login```) 
* Email + Password authentication support.
* [JSON WebToken](http://jwt.io) authentication support.

## Getting Started


### Prerequisites
You're going to need:

* Linux / macOS 
* Node.js >= v4
* MongoDB >= v3.4

### Installing

1. Fork this repository on Github.
2. Clone your forked repository (not our original one) to your hard drive with ```git clone https://github.com/YOURUSERNAME/node-rest-template.git```
3. ```cd node-rest-template.git```

Install the required dependencies by running:

```
$ npm install
```

Create a configuration file:

```
$ touch config/main.js
```

and add the following:

```js
var config = {};
config.port = 8000;
config.secret = 'com.company.project';

module.exports = config;
```

### Usage

Make sure a MongoDB daemon is running with:

```
$ sudo mongod
```

And start the API server:

```
$ npm run dev
```

Test your setup by registering your first user:

```sh
curl -d '{"email":"john@doe.com", "password":"secret"}' -H "Content-Type: application/json" http://127.0.0.1:8000/api/auth/register
```
 
and and accessing protected endpoints with a JWT:

```sh
$ curl -d '{"email":"john@doe.com"}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTk3YjcyZGFjMDM1ZDNmYTE2NTM5Y2QiLCJlbWFpbCI6ImpvaG5AZG9lLmNvbSIsImlhdCI6MTUwMzExNTA1MywiZXhwIjoxNTAzNzE5ODUzfQ.R1VLqbzLjGXRzOxHUeIcLTTwuYZUbnA0eL7Gy8RsuvY" http://127.0.0.1:8000/api/auth/secret
```



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
