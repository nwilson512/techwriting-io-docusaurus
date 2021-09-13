---
title: 'Rock Paper Scissors API'
lang: JavaScript
description: Allows humans to play Rock Paper Scissors against the computer.
---
```
// GENERAL CONFIGURATION

// call dependencies
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
var Player = require('./app/models/player');

// define server level constants
const app = express()
const port = 5656

// tell express to parse the body of requests using bodyParser. We'll be sending API requests as json in the body using URL encoded forms.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ROUTING CONFIGURATION

// instantiate the express router and bind it to a variable to be called later
var router = express.Router();


// ROUTES

// Display an informational message any time a root-level route is called.
router.all(['/','/v1'], function(req, res) {
    res.json({ message: 'Welcome the the rock-paper-scissors API. Make an API call at a valid endpoint. Find documentation information at <url>' });
});

// documentation route. Contains documentation on each API endpoint for parsing and display on the documentation site
router.get('/v1/docs', function(req, res) {
    res.json(
      {
        api_calls: [{
          endpoint: '/',
          data: {
            method: 'GET',
            parameters: 'NONE',
            description: 'The root endpoint, returns connection info',
            example: 'curl -X GET http://api.test:5656/api/v1/'
          }
        },
        {
          endpoint: '/players',
          data: [{
            method: 'GET',
            parameters: 'NONE',
            description: 'Fetch a list of all players stored in the database.',
            example: 'curl -X GET http://api.test:5656/api/v1/players'
          },
          {
            method: 'POST',
            parameters: 'name (string)',
            description: 'create a new player',
            example: 'curl -X POST -d "name=Steve" http://api.test:5656/api/v1/players'
          }]
        },
        {
          endpoint: '/players/<id>',
          data: [{
            method: 'GET',
            parameters: 'NONE',
            description: "Fetch a specific player's name",
            example: 'curl -X GET http://api.test:5656/api/v1/players/5c5cc956608ab82cb789da6b'
          },
          {
            method: 'PUT',
            parameters: 'name (string), played (enumerated string: rock, paper, scissors)',
            description: "Update a specific player's name or play a new hand. Use only one parameter at a time.",
            example: 'curl -X PUT -d "played=rock" http://api.test:5656/api/v1/players/5c5cc956608ab82cb789da6b'
          },
          {
            method: 'DELETE',
            parameters: 'NONE',
            description: "Delete a specific player's name",
            example: 'curl -X DELETE http://api.test:5656/api/v1/players/5c5cc956608ab82cb789da6b'
          }]
      }]}
    );
});

// Player-specific routes, for reference, this is all a large function: router.route('/players').post(function(req, res)).get(function(req, res))
router.route('/v1/players')

  // call the 'post()' method, and in an anonymous function, create a new player
  .post(function(req, res) {

      // declare a variable: 'player', based on the model: 'Player()' defined in "player.js"
      var player = new Player();
      // Parse the name value of the request's body json content.
      player.name = req.body.name;

      // Save the data in the 'player' variable to the database with the '.save' function. If there's an error, pass it to the function
      player.save(function(err) {
          // check for any errors, if they exist, send them in the response
          if (err)  {
              // pass the error information to the express response function
              res.send(err);
            }
          // otherwise, if there are no errors, continue
          else {
            // instruct express to respond, passing success message in the response body
            res.json({ message: 'Player created!' });
            }
      });

  })

  // call the 'get()' function, and in an anonymous function, pass request and return response data
  .get(function(req, res) {
      // Using the 'Player' model, call the mongoose '.find()' function, passing error and players
      Player.find(function(err, players) {
          if (err) {
              res.send(err);
            }
          else {
            res.json(players);
            }
      });
  });

// routes for each player
router.route('/v1/players/:player_id')

    // get the player with that id (accessed at GET http://localhost:8080/api/players/:player_id)
    .get(function(req, res) {
        Player.findById(req.params.player_id, function(err, player) {
            if (err) {
                res.send(err);
              }
            else {
              res.json(player);
            }
        });
    })

    // update the player with this id (accessed at PUT http://localhost:8080/api/players/:player_id)
    .put(function(req, res) {

        // use our player model to find the player we want
        Player.findById(req.params.player_id, function(err, player) {

            if (err){
              res.send(err);
              }
            else {

              // gate player name update behind if statement to avoid removing name if no parameter is given, see notes for next version
              if (req.body.name) {
                // get the player's name from the request body
                player.name = req.body.name;
              }

              // Game logic

              // get the played hand from the request body
              player.played = req.body.played;
              // DEBUG:
              console.log('player hand ' + player.played);

              // read existing wins, in order to increment them, if necessary
              player.wins = player.get('wins');
              // DEBUG:
              console.log('existing wins ' + player.wins);

              // read existing losses, in order to increment them, if necessary
              player.losses = player.get('losses');
              // DEBUG:
              console.log('existing losses ' + player.losses);

              // get the current time, this is used to generate the CPU hand
              var time = new Date();

              // create a victory condition flag to be set for the response, 0 indicates no play has occurred.
              var victoryFlag = 0;
              // DEBUG:
              console.log('initial victory condition set to ' + victoryFlag);

              // use time for psuedorandom hand generation, take the modulus of 3 to select one of 3 hands
              var notRandom = time.getSeconds() % 3;
              // DEBUG:
              console.log('psuedorandom choice is ' + notRandom);

              // declare an array of possible hands to be matched with the integer value
              var handArray = ["rock","paper","scissors"];
              // DEBUG:
              console.log('array ' + handArray);

              // pseudorandomly generate a hand for the cpu to play. It may be simpler to just compare numeric values, but then I'd need to convert strings to numbers from the request, and convert numbers to strings in the response.
              var cpuPlayed = handArray[notRandom];
              // DEBUG:
              console.log('CPU hand ' + cpuPlayed);
              // compare the CPU hand to the player's hand

              // if the hands match, set the victory condition to a tie
              if(player.played == cpuPlayed)  {
                victoryFlag = 1;
              }

              // Player lose conditions. This compares the player hand with the computer hands in the array and defines all possible conditions in which a player loses.
              else if(player.played == handArray[0] && cpuPlayed == handArray[1] || player.played == handArray[1] && cpuPlayed == handArray[2] || player.played == handArray[2] && cpuPlayed == handArray[0])  {

                // increment player losses variable
                player.losses = player.losses + 1;

                // setting a loss flag
                victoryFlag = 2;

              }

              // Player win conditions - This compares the player hand with the computer hands in the array and defines all possible conditions in which a player wins.
              else if(player.played == handArray[1] && cpuPlayed == handArray[0] || player.played == handArray[2] && cpuPlayed == handArray[1] || player.played == handArray[0] && cpuPlayed == handArray[2])  {

                // increment player wins variable
                player.wins = player.wins + 1;
                // DEBUG:
                console.log('player.wins value ' + player.wins);

                // setting a win flag
                victoryFlag = 3;
              }

              // DEBUG:
              console.log('final victory condition set to ' + victoryFlag);

              // save the player
              player.save(function(err) {
                  if (err)  {
                      res.send(err);
                  }
                  // because of the way these flags are set, users will only see the latest operation if they update both the name and make a play simultaneously
                  else if (victoryFlag == 0)  {
                    res.json({message: 'Player updated.'})
                  }
                  else if (victoryFlag == 1)  {
                    res.json({player_hand: player.played, cpu_hand: cpuPlayed, result: 'tie'})
                  }
                  else if (victoryFlag == 2)  {
                    res.json({player_hand: player.played, cpu_hand: cpuPlayed, result: 'player lost'})
                  }
                  else if (victoryFlag == 3)  {
                    res.json({player_hand: player.played, cpu_hand: cpuPlayed, result: 'player won'})
                  }
              });
            }
        });
    })

    // delete the player with this id (accessed at DELETE http://localhost:8080/api/players/:player_id)
    .delete(function(req, res) {
        Player.deleteOne({
            _id: req.params.player_id
        }, function(err, player) {
            if (err) {
              res.send(err);
            }
            else {
              res.json({ message: 'Player successfully deleted' });
            }
        });
    });

// prefix all calls for versioning
app.use('/api', router);


// DATABASE CONFIGURATION

// open a connection with mongoose DB at mLab. This is not a production solution.
mongoose.connect('mongodb://wouldn't:you@like.mlab.com:to/know?', { useNewUrlParser: true });


// SERVER OPERATION

// tell express to listen on the previously defined port
app.listen(port);
// DEBUG: print the location on localhost for developer information
console.log('Developers: Make API calls to localhost:' + port + '/api/v1');


// README

// Note:
// This is not a production API solution, it is only for example use and is based heavily on the bears API tutorial and example code here: https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

// Operate this locally: node server.js

// Spec:
//
// [✓] Create a rock-paper-scissors API that accepts inputs and performs operations related to players in a game.
// [✓] Each player will be identified through a unique ID, generated when the '/players' endpoint is called with the POST method
// [✓] you can get a full list of players by querying the '/players' endpoint and GET method
// [✓] you can get specific information on a player by querying the '/players/:playerID' endpoint with the GET method
// [✓] you can update a specific players name with the '/players/:playerID' endpoint with the PUT method
// [✓] The API will use a nosql mongoose database to store all of the relevant information
// [✓] The mongoose database model will be stored separately, and will include the following schema configuration:
//      * playerSchema
//         * name: string
//         * played: enumerated String
//         * wins: int
//         * losses int
// [ ] In addition to the stored win/loss information, add a win/loss ratio endpoint that calculates the ratio and sends it as a decimal when the '/players/:playerID/calculated' endpoint is called with the GET method
// [✓] Allow users to play the game by calling '/players/:playerID' with the PUT method, and the 'played' body parameter set to their hand
// [✓] Add error handling for unsupported parameters
//        [✓] Mongodb enumerated strings
//        [✓] Check for and return an unsupported string error
// [ ] Define behvavior in player PUT request for a simultaneous name update and play operation
// [✓] Support versioning
// [ ] Change debug console log entries into log write operations
// [ ] Reconfigure app.use routing to handle requests to true root, /api, and /v1
// [ ] Move credentials into a secure file, excluded from GitHub

// Next Version:
// [ ] Move play logic into its own route
// [ ] remove put statement name gating if statement to allow user to remove name entry from the DB
```
