function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

  // Helper to loop through all players
function allPlayers() {
  const game = gameObject();
  return Object.assign({}, game.home.players, game.away.players);
}

// 1. Points scored by a player
function numPointsScored(playerName) {
  return allPlayers()[playerName].points;
}

// 2. Shoe size of a player
function shoeSize(playerName) {
  return allPlayers()[playerName].shoe;
}

// 3. Team colors
function teamColors(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return game[teamKey].colors;
    }
  }
}

// 4. All team names
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// 5. Jersey numbers for a team
function playerNumbers(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) {
      return Object.values(team.players).map(player => player.number);
    }
  }
}

// 6. All stats for a player
function playerStats(playerName) {
  return allPlayers()[playerName];
}

// 7. Rebounds of player with biggest shoe size
function bigShoeRebounds() {
  let biggestShoe = 0;
  let reboundCount = 0;
  const players = allPlayers();

  for (let player in players) {
    if (players[player].shoe > biggestShoe) {
      biggestShoe = players[player].shoe;
      reboundCount = players[player].rebounds;
    }
  }

  return reboundCount;
}

// Export functions for testing
module.exports = {
  gameObject,
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
}; 

function mostPointsScored() {
  const players = allPlayers();
  let topPlayer = "";
  let maxPoints = 0;

  for (let player in players) {
    if (players[player].points > maxPoints) {
      maxPoints = players[player].points;
      topPlayer = player;
    }
  }

  return topPlayer;
}


function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }
  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}


function playerWithLongestName() {
  const players = allPlayers();
  let longestName = "";

  for (let player in players) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }

  return longestName;
}


function doesLongNameStealATon() {
  const players = allPlayers();
  const longNamePlayer = playerWithLongestName();

  let maxSteals = 0;
  let topStealer = "";

  for (let player in players) {
    if (players[player].steals > maxSteals) {
      maxSteals = players[player].steals;
      topStealer = player;
    }
  }

  return longNamePlayer === topStealer;
}


module.exports = {
  gameObject,
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon,
};
