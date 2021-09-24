---
title: API
layout: api
toc: true

type: Concept, Reference
---

import RpsapiReference from "../../src/components/RpsapiReference";

## The Rock Paper Scissors API

The Rock Paper Scissors API (RPSAPI) is a REST API that allows you to play rock paper scissors against a computer player. Using the RPSAPI, you can revisit a proven and universal method of dispute resolution from your childhood. Although, I don't recommend using this to make any important life decisions.

Within the API, you can do the following:

* Play a hand against the computer
* Add and remove players
* View a list of all players
* View a player's scores
* Update player names and delete players

## Requirements

To interact with the API and play Rock Paper Scissors, you need an http client that can send requests using the `GET`, `PUT`, `POST`, and `DELETE` methods, such as [cURL](https://curl.haxx.se). You also need an internet connection, but you do not need an account.

## Getting started

The most immediate way you can get started with rock paper scissors is to submit a request using form data. This button sends a form request to get all of the players:

<form class="getPlayers" action="http://techwriting.io/rpsapi/v1/players/" method="get">
  <input class="getPlayersButton" type="submit" name="submit" value="Get all players"/>
</form>

The next-easiest way to submit requests, and the way this document provides all examples, is to use cURL. The following cURL command performs the same `GET` request as the form above:

```bash
curl -X GET http://techwriting.io/rpsapi/v1/players
```

Using cURL, you can manually call all of the endpoints in the Rock Paper Scissors API and play the game. See the [Reference Section](#api-reference) for all of the available endpoints and example cURL commands for each.

## How it works

I wrote the Rock Paper Scissors API in Javascript, and it uses Express to handle requests and a Mongoose database to store player and game data.

The following diagram illustrates the general architecture of this API:

![Diagram showing API traffic flow](/img/traffic.png)

* **Request** A player makes an API request
* **Reverse Proxy** The webserver routes traffic to the Express server
* **server.js** Javascript code handles the request using the Express framework and Mongoose library
* **Response** Responses are returned to the user

The following sections describe some of the more noteworthy details of how the API functions:

### Computer hand generation

The RPSAPI generates the computer's using a pseudorandom (in a generous sense of the term) algorithm based on the current time in seconds.

```js
// use time for psuedorandom hand generation, take the modulus of 3 to select one of 3 hands
              var notRandom = time.getSeconds() % 3;
              <...>
```

### Documentation endpoint

I wrote the API documentation into the server.js source code, and you can access it at its own endpoint. The following code snippet shows the router get function, the endpoint string, and response JSON:

```js
router.get('/v1/docs', function(req, res) {
    res.json(
      {
        api_calls: [{
          endpoint: '/',
          data: {
            method: 'GET',
            parameters: 'NONE',
            description: 'The root endpoint, returns connection info',
            example: 'curl -X GET http://techwriting.io/rpsapi/v1/'
          }
        },
        <...>
```

I wrote an API documentation automation script, which automatically retrieves the reference documentation for this site from this endpoint, parses, and writes the data into this page's YAML frontmatter. For more information, including the full code, see the [API Documentation Automation](/docs/sample-works/api-documentation-automation) section of my sample work.

### API versioning

This API features rudimentary versioning support through manually prepended strings prepared for the router. This allows me to develop more sophisticated versioning code at a later date while not impacting the end user experience.

```js
router.get('/v1/docs' <...>
```

### Database

A Mongoose library handles database access. The database itself is hosted by the Mlab cloud storage provider. This reduces the complexity of administration, and allows me to query the same database from both development and production versions of my API.

```js
// open a connection with mongoose DB at mLab. This is not a production solution.
mongoose.connect('mongodb://XXXXXX:yyyYYYyy@zzzZZZZz.mlab.com:55555/api', { useNewUrlParser: true });
<...>
```

### More information

For more information, see the full Rock Paper Scissors API code in the [Samples](/docs/sample-works/rock-paper-scissors-api) section.

## API reference

<RpsapiReference />