const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//master key to delete all teams
const masterKey = '93HGF-FDJ49-DSGDS-89W4E'

let teams = [
      {
        "id": 1,
        "name": "Anaheim Ducks",
        "abbreviation": "ANA",
        "location": "Anaheim, California",
        "conference": "Western",
        "division": "Pacific",
        "founded": 1993,
        "arena": "Honda Center",
        "coach": "Greg Cronin",
        "gm": "Pat Verbeek",
        "owner": "Henry Samueli",
        "captain": "Vacant",
        "stanley_cups": 1,
        "affiliate": "San Diego Gulls",
        "points_leader": {
          "player": "Ryan Getzlaf",
          "points": 1019
        }
      },
      {
        "id": 2,
        "name": "Boston Bruins",
        "abbreviation": "BOS",
        "location": "Boston, Massachusetts",
        "conference": "Eastern",
        "division": "Atlantic",
        "founded": 1924,
        "arena": "TD Garden",
        "coach": "Jim Montgomery",
        "gm": "Don Sweeney",
        "owner": "Jeremy Jacobs",
        "captain": "Brad Marchand",
        "stanley_cups": 6,
        "affiliate": "Providence Bruins",
        "points_leader": {
          "player": "Ray Bourque",
          "points": 1506
        }
      },
      {
        "id": 3,
        "name": "Buffalo Sabres",
        "abbreviation": "BUF",
        "location": "Buffalo, New York",
        "conference": "Eastern",
        "division": "Atlantic",
        "founded": 1970,
        "arena": "KeyBank Center",
        "coach": "Lindy Ruff",
        "gm": "Kevyn Adams",
        "owner": "Terry & Kim Pegula",
        "captain": "Vacant",
        "stanley_cups": 0,
        "affiliate": "Rochester Americans",
        "points_leader": {
          "player": "Gilbert Perreault",
          "points": 1326
        }
      },
      {
        "id": 4,
        "name": "Calgary Flames",
        "abbreviation": "CGY",
        "location": "Calgary, Alberta",
        "conference": "Western",
        "division": "Pacific",
        "founded": 1972,
        "arena": "Scotiabank Saddledome",
        "coach": "Ryan Huska",
        "gm": "Craig Conroy",
        "owner": "Calgary Sports and Entertainment Corporation",
        "captain": "Mikael Backlund",
        "stanley_cups": 1,
        "affiliate": "Calgary Wranglers",
        "points_leader": {
          "player": "Jarome Iginla",
          "points": 1095
        }
      },
      {
        "id": 5,
        "name": "Carolina Hurricanes",
        "abbreviation": "CAR",
        "location": "Raleigh, North Carolina",
        "conference": "Eastern",
        "division": "Metropolitan",
        "founded": 1972,
        "arena": "PNC Arena",
        "coach": "Rod Brind'Amour",
        "gm": "Eric Tulsky",
        "owner": "Tom Dundon",
        "captain": "Jordan Staal",
        "stanley_cups": 1,
        "affiliate": "Chicago Wolves",
        "points_leader": {
          "player": "Ron Francis",
          "points": 1175
        }
      },
      {
        "id": 6,
        "name": "Chicago Blackhawks",
        "abbreviation": "CHI",
        "location": "Chicago, Illinois",
        "conference": "Western",
        "division": "Central",
        "founded": 1926,
        "arena": "United Center",
        "coach": "Luke Richardson",
        "gm": "Kyle Davidson",
        "owner": "Wirtz Corporation",
        "captain": "Vacant",
        "stanley_cups": 6,
        "affiliate": "Rockford IceHogs",
        "points_leader": {
          "player": "Stan Mikita",
          "points": 1467
        }
      },
      {
        "id": 7,
        "name": "Colorado Avalanche",
        "abbreviation": "COL",
        "location": "Denver, Colorado",
        "conference": "Western",
        "division": "Central",
        "founded": 1972,
        "arena": "Ball Arena",
        "coach": "Jared Bednar",
        "gm": "Chris MacFarland",
        "owner": "Stan Kroenke",
        "captain": "Gabriel Landeskog",
        "stanley_cups": 3,
        "affiliate": "Colorado Eagles",
        "points_leader": {
          "player": "Joe Sakic",
          "points": 1641
        }
      },
      {
        "id": 8,
        "name": "Columbus Blue Jackets",
        "abbreviation": "CBJ",
        "location": "Columbus, Ohio",
        "conference": "Eastern",
        "division": "Metropolitan",
        "founded": 2000,
        "arena": "Nationwide Arena",
        "coach": "Dean Evason",
        "gm": "Don Waddell",
        "owner": "John P. McConnell",
        "captain": "Boone Jenner",
        "stanley_cups": 0,
        "affiliate": "Cleveland Monsters",
        "points_leader": {
          "player": "Rick Nash",
          "points": 547
        }
      },
      {
        "id": 9,
        "name": "Dallas Stars",
        "abbreviation": "DAL",
        "location": "Dallas, Texas",
        "conference": "Western",
        "division": "Central",
        "founded": 1967,
        "arena": "American Airlines Center",
        "coach": "Peter DeBoer",
        "gm": "Jim Nill",
        "owner": "Tom Gaglardi",
        "captain": "Jamie Benn",
        "stanley_cups": 1,
        "affiliate": "Texas Stars",
        "points_leader": {
          "player": "Mike Modano",
          "points": 1359
        }
      },
      {
        "id": 10,
        "name": "Detroit Red Wings",
        "abbreviation": "DET",
        "location": "Detroit, Michigan",
        "conference": "Eastern",
        "division": "Atlantic",
        "founded": 1926,
        "arena": "Little Caesars Arena",
        "coach": "Derek Lalonde",
        "gm": "Steve Yzerman",
        "owner": "Ilitch Holdings",
        "captain": "Dylan Larkin",
        "stanley_cups": 11,
        "affiliate": "Grand Rapids Griffins",
        "points_leader": {
          "player": "Gordie Howe",
          "points": 1809
        }
      },
      {
        "id": 11,
        "name": "Edmonton Oilers",
        "abbreviation": "EDM",
        "location": "Edmonton, Alberta",
        "conference": "Western",
        "division": "Pacific",
        "founded": 1972,
        "arena": "Rogers Place",
        "coach": "Jay Woodcroft",
        "gm": "Ken Holland",
        "owner": "Daryl Katz",
        "captain": "Connor McDavid",
        "stanley_cups": 5,
        "affiliate": "Bakersfield Condors",
        "points_leader": {
          "player": "Wayne Gretzky",
          "points": 1669
        }
      },
      {
        "id": 12,
        "name": "Florida Panthers",
        "abbreviation": "FLA",
        "location": "Sunrise, Florida",
        "conference": "Eastern",
        "division": "Atlantic",
        "founded": 1993,
        "arena": "FLA Live Arena",
        "coach": "Paul Maurice",
        "gm": "Bill Zito",
        "owner": "Vincent Viola",
        "captain": "Aleksander Barkov",
        "stanley_cups": 1,
        "affiliate": "Charlotte Checkers",
        "points_leader": {
          "player": "Aleksander Barkov",
          "points": 711
        }
      },
      {
        "id": 13,
        "name": "Los Angeles Kings",
        "abbreviation": "LAK",
        "location": "Los Angeles, California",
        "conference": "Western",
        "division": "Pacific",
        "founded": 1967,
        "arena": "Crypto.com Arena",
        "coach": "Jim Hiller",
        "gm": "Rob Blake",
        "owner": "Philip Anschutz",
        "captain": "Anže Kopitar",
        "stanley_cups": 2,
        "affiliate": "Ontario Reign",
        "points_leader": {
          "player": "Marcel Dionne",
          "points": 1307
        }
      },
      {
        "id": 14,
        "name": "Minnesota Wild",
        "abbreviation": "MIN",
        "location": "Saint Paul, Minnesota",
        "conference": "Western",
        "division": "Central",
        "founded": 2000,
        "arena": "Xcel Energy Center",
        "coach": "John Hynes",
        "gm": "Bill Guerin",
        "owner": "Craig Leipold",
        "captain": "Jared Spurgeon",
        "stanley_cups": 0,
        "affiliate": "Iowa Wild",
        "points_leader": {
          "player": "Mikko Koivu",
          "points": 709
        }
      },
      {
        "id": 15,
        "name": "Montreal Canadiens",
        "abbreviation": "MTL",
        "location": "Montreal, Quebec",
        "conference": "Eastern",
        "division": "Atlantic",
        "founded": 1909,
        "arena": "Bell Centre",
        "coach": "Martin St. Louis",
        "gm": "Kent Hughes",
        "owner": "Geoff Molson",
        "captain": "Nick Suzuki",
        "stanley_cups": 24,
        "affiliate": "Laval Rocket",
        "points_leader": {
          "player": "Guy Lafleur",
          "points": 1246
        }
      },
      {
        "id": 16,
        "name": "Nashville Predators",
        "abbreviation": "NSH",
        "location": "Nashville, Tennessee",
        "conference": "Western",
        "division": "Central",
        "founded": 1998,
        "arena": "Bridgestone Arena",
        "coach": "Andrew Brunette",
        "gm": "Barry Trotz",
        "owner": "Predators Holdings LLC",
        "captain": "Roman Josi",
        "stanley_cups": 0,
        "affiliate": "Milwaukee Admirals",
        "points_leader": {
          "player": "Roman Josi",
          "points": 686
        }
      },
      {
        "id": 17,
        "name": "New Jersey Devils",
        "abbreviation": "NJD",
        "location": "Newark, New Jersey",
        "conference": "Eastern",
        "division": "Metropolitan",
        "founded": 1974,
        "arena": "Prudential Center",
        "coach": "Sheldon Keefe",
        "gm": "Tom Fitzgerald",
        "owner": "Joshua Harris & David Blitzer",
        "captain": "Nico Hischier",
        "stanley_cups": 3,
        "affiliate": "Utica Comets",
        "points_leader": {
          "player": "Patrik Elias",
          "points": 1025
        }
      },
      {
        "id": 18,
        "name": "New York Islanders",
        "abbreviation": "NYI",
        "location": "Elmont, New York",
        "conference": "Eastern",
        "division": "Metropolitan",
        "founded": 1972,
        "arena": "UBS Arena",
        "coach": "Patrick Roy",
        "gm": "Lou Lamoriello",
        "owner": "Scott D. Malkin",
        "captain": "Anders Lee",
        "stanley_cups": 4,
        "affiliate": "Bridgeport Islanders",
        "points_leader": {
          "player": "Bryan Trottier",
          "points": 1353
        }
      },
      {
        "id": 19,
        "name": "New York Rangers",
        "abbreviation": "NYR",
        "location": "New York, New York",
        "conference": "Eastern",
        "division": "Metropolitan",
        "founded": 1926,
        "arena": "Madison Square Garden",
        "coach": "Peter Laviolette",
        "gm": "Chris Drury",
        "owner": "James Dolan",
        "captain": "Jacob Trouba",
        "stanley_cups": 4,
        "affiliate": "Hartford Wolf Pack",
        "points_leader": {
          "player": "Rod Gilbert",
          "points": 1021
        }
      },
      {
        "id": 20,
        "name": "Ottawa Senators",
        "abbreviation": "OTT",
        "location": "Ottawa, Ontario",
        "conference": "Eastern",
        "division": "Atlantic",
        "founded": 1992,
        "arena": "Canadian Tire Centre",
        "coach": "Travis Green",
        "gm": "Steve Staios",
        "owner": "Michael Andlauer",
        "captain": "Brady Tkachuk",
        "stanley_cups": 0,
        "affiliate": "Belleville Senators",
        "points_leader": {
          "player": "Daniel Alfredsson",
          "points": 1108
        }
      }, {
        "id": 21,
        "name": "Philadelphia Flyers",
        "abbreviation": "PHI",
        "location": "Philadelphia, Pennsylvania",
        "conference": "Eastern",
        "division": "Metropolitan",
        "founded": 1967,
        "arena": "Wells Fargo Center",
        "coach": "John Tortorella",
        "gm": "Daniel Briere",
        "owner": "Comcast Spectacor",
        "captain": "Sean Couturier",
        "stanley_cups": 2,
        "affiliate": "Lehigh Valley Phantoms",
        "points_leader": {
          "player": "Bobby Clarke",
          "points": 1210
        }
      },
      {
        "id": 22,
        "name": "Pittsburgh Penguins",
        "abbreviation": "PIT",
        "location": "Pittsburgh, Pennsylvania",
        "conference": "Eastern",
        "division": "Metropolitan",
        "founded": 1967,
        "arena": "PPG Paints Arena",
        "coach": "Mike Sullivan",
        "gm": "Kyle Dubas",
        "owner": "Fenway Sports Group",
        "captain": "Sidney Crosby",
        "stanley_cups": 5,
        "affiliate": "Wilkes-Barre/Scranton Penguins",
        "points_leader": {
          "player": "Mario Lemieux",
          "points": 1723
        }
      },
      {
        "id": 23,
        "name": "San Jose Sharks",
        "abbreviation": "SJS",
        "location": "San Jose, California",
        "conference": "Western",
        "division": "Pacific",
        "founded": 1991,
        "arena": "SAP Center",
        "coach": "Ryan Warsofsky",
        "gm": "Mike Grier",
        "owner": "San Jose Sports & Entertainment Enterprises",
        "captain": "Logan Couture",
        "stanley_cups": 0,
        "affiliate": "San Jose Barracuda",
        "points_leader": {
          "player": "Patrick Marleau",
          "points": 1111
        }
      },
      {
        "id": 24,
        "name": "Seattle Kraken",
        "abbreviation": "SEA",
        "location": "Seattle, Washington",
        "conference": "Western",
        "division": "Pacific",
        "founded": 2021,
        "arena": "Climate Pledge Arena",
        "coach": "Dave Hakstol",
        "gm": "Ron Francis",
        "owner": "Seattle Hockey Partners",
        "captain": "Vacant",
        "stanley_cups": 0,
        "affiliate": "Coachella Valley Firebirds",
        "points_leader": {
          "player": "Jared McCann",
          "points": 182
        }
      },
      {
        "id": 25,
        "name": "St. Louis Blues",
        "abbreviation": "STL",
        "location": "St. Louis, Missouri",
        "conference": "Western",
        "division": "Central",
        "founded": 1967,
        "arena": "Enterprise Center",
        "coach": "Drew Bannister",
        "gm": "Doug Armstrong",
        "owner": "Tom Stillman",
        "captain": "Brayden Schenn",
        "stanley_cups": 1,
        "affiliate": "Springfield Thunderbirds",
        "points_leader": {
          "player": "Bernie Federko",
          "points": 1073
        }
      },
      {
        "id": 26,
        "name": "Tampa Bay Lightning",
        "abbreviation": "TBL",
        "location": "Tampa, Florida",
        "conference": "Eastern",
        "division": "Atlantic",
        "founded": 1992,
        "arena": "Amalie Arena",
        "coach": "Jon Cooper",
        "gm": "Julien BriseBois",
        "owner": "Jeffrey Vinik",
        "captain": "Vacant",
        "stanley_cups": 3,
        "affiliate": "Syracuse Crunch",
        "points_leader": {
          "player": "Steven Stamkos",
          "points": 1137
        }
      },
      {
        "id": 27,
        "name": "Toronto Maple Leafs",
        "abbreviation": "TOR",
        "location": "Toronto, Ontario",
        "conference": "Eastern",
        "division": "Atlantic",
        "founded": 1917,
        "arena": "Scotiabank Arena",
        "coach": "Craig Berube",
        "gm": "Brad Treliving",
        "owner": "Maple Leaf Sports & Entertainment",
        "captain": "Auston Matthews",
        "stanley_cups": 13,
        "affiliate": "Toronto Marlies",
        "points_leader": {
          "player": "Mats Sundin",
          "points": 987
        }
      },
      {
        "id": 28,
        "name": "Utah Hockey Club",
        "abbreviation": "UTA",
        "location": "Salt Lake City, Utah",
        "conference": "Western",
        "division": "Central",
        "founded": 2024,
        "arena": "Delta Center",
        "coach": "André Tourigny",
        "gm": "Bill Armstrong",
        "owner": "Ryan Smith",
        "captain": "Vacant",
        "stanley_cups": 0,
        "affiliate": "Tucson Roadrunners",
        "points_leader": {
          "player": "Clayton Keller",
          "points": 0
        }
      },
      {
        "id": 29,
        "name": "Vancouver Canucks",
        "abbreviation": "VAN",
        "location": "Vancouver, British Columbia",
        "conference": "Western",
        "division": "Pacific",
        "founded": 1970,
        "arena": "Rogers Arena",
        "coach": "Rick Tocchet",
        "gm": "Patrik Allvin",
        "owner": "Francesco Aquilini",
        "captain": "Quinn Hughes",
        "stanley_cups": 0,
        "affiliate": "Abbotsford Canucks",
        "points_leader": {
          "player": "Henrik Sedin",
          "points": 1070
        }
      },
      {
        "id": 30,
        "name": "Vegas Golden Knights",
        "abbreviation": "VGK",
        "location": "Las Vegas, Nevada",
        "conference": "Western",
        "division": "Pacific",
        "founded": 2017,
        "arena": "T-Mobile Arena",
        "coach": "Bruce Cassidy",
        "gm": "Kelly McCrimmon",
        "owner": "Bill Foley",
        "captain": "Mark Stone",
        "stanley_cups": 1,
        "affiliate": "Henderson Silver Knights",
        "points_leader": {
          "player": "Jonathan Marchessault",
          "points": 417
        }
      },
      {
        "id": 31,
        "name": "Washington Capitals",
        "abbreviation": "WSH",
        "location": "Washington, D.C.",
        "conference": "Eastern",
        "division": "Metropolitan",
        "founded": 1974,
        "arena": "Capital One Arena",
        "coach": "Spencer Carbery",
        "gm": "Brian MacLellan",
        "owner": "Monumental Sports & Entertainment",
        "captain": "Alex Ovechkin",
        "stanley_cups": 1,
        "affiliate": "Hershey Bears",
        "points_leader": {
          "player": "Alex Ovechkin",
          "points": 1550
        }
      },
      {
        "id": 32,
        "name": "Winnipeg Jets",
        "abbreviation": "WPG",
        "location": "Winnipeg, Manitoba",
        "conference": "Western",
        "division": "Central",
        "founded": 1999,
        "arena": "Canada Life Centre",
        "coach": "Scott Arniel",
        "gm": "Kevin Cheveldayoff",
        "owner": "True North Sports & Entertainment",
        "captain": "Adam Lowry",
        "stanley_cups": 0,
        "affiliate": "Manitoba Moose",
        "points_leader": {
          "player": "Blake Wheeler",
          "points": 812
        }
      }
    ];
  
//get all teams
app.get('/teams', (req, res) => {
    res.json(teams);
});

//get a random team
app.get("/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * teams.length);
    res.json(teams[randomIndex]);
  });

//retrieves team(s) with the most Stanley Cups
app.get('/teams/most_stanley_cups', (req, res) => {
    const maxCups = Math.max(...teams.map(team => team.stanley_cups));
    const topTeams = teams.filter(team => team.stanley_cups === maxCups);

    res.json(topTeams);
});

//retrieves team(s) with the fewest Stanley Cups
app.get('/teams/least_stanley_cups', (req, res) => {
    const minCups = Math.min(...teams.map(team => team.stanley_cups));
    const worstTeams = teams.filter(team => team.stanley_cups === minCups);

    res.json(worstTeams);
});

//get a team by specific ID
app.get('/teams/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const findTeam = teams.find((team) => team.id === id);
    res.json(findTeam);
});

//get a list of teams by any attribute-value pairing (besides ID and points leader)
app.get('/teams/:attribute/:value', (req, res) => {
    const attribute = req.params.attribute.toLowerCase(); 
    let value = req.params.value.toLowerCase(); 

    value = decodeURIComponent(value);

    if (!teams[0].hasOwnProperty(attribute)) {
        return res.status(400).json({ error: `Invalid attribute: ${attribute}` });
    }

    const filteredTeams = teams.filter(team => team[attribute].toString().toLowerCase() === value);

    if (filteredTeams.length === 0) {
        return res.status(404).json({ error: `No teams found with ${attribute} = ${value}.` });
    }

    res.json(filteredTeams);
});

//get the # of points that a team's points leader has scored
app.get('/teams/:id/points-leader/:player', (req, res) => {
    const id = parseInt(req.params.id);
    const playerName = decodeURIComponent(req.params.player).toLowerCase();

    const team = teams.find(team => team.id === id);

    if (!team) {
        return res.status(404).json({ error: `No team found with ID ${id}.` });
    }

    if (team.points_leader.player.toLowerCase() === playerName) {
        res.json({ "points": team.points_leader.points });
    } else {
        return res.status(404).json({ error: `No points leader found with the name ${playerName} for team ID ${id}.` });
    }
});

//get the points leader's name based on the # of points they have scored
app.get('/teams/:id/points-leader/points/:points', (req, res) => {
    const id = parseInt(req.params.id);
    const points = parseInt(req.params.points);

    const team = teams.find(team => team.id === id);

    if (!team) {
        return res.status(404).json({ error: `No team found with ID ${id}.` });
    }

    if (team.points_leader.points === points) {
        res.json({ "player": team.points_leader.player });
    } else {
        return res.status(404).json({ error: `No points leader found who has scored ${points} points for team ID ${id}.` });
    }
});

//get all values for a specific attribute
app.get('/teams/:attribute', (req, res) => {
    const attribute = req.params.attribute.split('.');

    const getNestedAttribute = (obj, keys) => {
        return keys.reduce((value, key) => {
            return value && value[key] !== undefined ? value[key] : undefined;
        }, obj);
    };

    if (getNestedAttribute(teams[0], attribute) === undefined) {
        return res.status(400).json({ error: `Invalid attribute: ${req.params.attribute}` });
    }

    const attributeValues = teams.map((team) => getNestedAttribute(team, attribute));

    res.json(attributeValues);
});

//get all teams founded before a certain year
app.get('/teams/founded-before/:year', (req, res) => {
    const year = parseInt(req.params.year);
    const filteredTeams = teams.filter(team => team.founded < year);

    if (filteredTeams.length === 0) {
        return res.status(404).json({ error: `No teams were founded after ${year}.` });
    }

    res.json(filteredTeams);
});

//get all teams founded after a certain year
app.get('/teams/founded-after/:year', (req, res) => {
    const year = parseInt(req.params.year);
    const filteredTeams = teams.filter(team => team.founded > year);

    if (filteredTeams.length === 0) {
        return res.status(404).json({ error: `No teams were founded after ${year}.` });
    }

    res.json(filteredTeams);
});

//add a new team to the end of the list
app.post('/teams', (req, res) => {
    const addTeam = {
        "id": teams.length + 1,
        "name": req.body.name || existingTeam.name,
        "abbreviation": req.body.abbreviation || existingTeam.abbreviation,
        "location": req.body.location || existingTeam.location,
        "conference": req.body.conference || existingTeam.conference,
        "division": req.body.division || existingTeam.division,
        "founded": req.body.founded || existingTeam.founded,
        "arena": req.body.arena || existingTeam.arena,
        "coach": req.body.coach || existingTeam.coach,
        "gm": req.body.gm || existingTeam.gm,
        "owner": req.body.owner || existingTeam.owner,
        "captain": req.body.captain || existingTeam.captain,
        "stanley_cups": req.body.stanley_cups || existingTeam.stanley_cups,
        "affiliate": req.body.affiliate || existingTeam.affiliate,
        "points_leader": {
            "player": (req.body.points_leader && req.body.points_leader.player) || existingTeam.points_leader.player,
            "points": (req.body.points_leader && req.body.points_leader.points) || existingTeam.points_leader.points
        }
    };

    teams.push(addTeam);
    res.json(replacementTeam);
});

//add new teams in bulk
app.post('/teams/bulk', (req, res) => {
    const newTeams = req.body.teams;
    newTeams.forEach(team => {
        team.id = teams.length + 1;
        teams.push(team);
    });
    res.status(201).json(newTeams);
});

//update/replace all attributes of a team
app.put('teams/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const existingPost = teams.find((team) => team.id === id);
    if (!existingPost){
        return res.status(404).json({error: `No team with ID ${id} found. No team information was updated`}) 
    } else {
        const replacementTeam = {
            "id": id,
            "name": req.body.name,
            "abbreviation": req.body.abbreviation,
            "location": req.body.location,
            "conference": req.body.conference,
            "division": req.body.division,
            "founded": req.body.founded,
            "arena": req.body.arena,
            "coach": req.body.coach,
            "gm": req.body.gm,
            "owner": req.body.owner,
            "captain": req.body.captain,
            "stanley_cups": req.body.stanley_cups,
            "affiliate": req.body.affiliate,
            "points_leader": {
              "player": req.body.points_leader.name,
              "points": req.body.points_leader.points
            }
        };
        
        const searchIndex = teams.findIndex((team) = team.id === id);
        teams[searchIndex] = replacementTeam;
        res.json(replacementTeam)
    }

});

//update one or more attributes of a team
app.patch('/teams/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const existingTeam = teams.find((team) => team.id === id);
    if (!existingPost){
        return res.status(404).json({error: `No team with ID ${id} found. No team information was updated`}) 
    } else {
        const replacementTeam = {
            "id": id,
            "name": req.body.name || existingTeam.name,
            "abbreviation": req.body.abbreviation || existingTeam.abbreviation,
            "location": req.body.location || existingTeam.location,
            "conference": req.body.conference || existingTeam.conference,
            "division": req.body.division || existingTeam.division,
            "founded": req.body.founded || existingTeam.founded,
            "arena": req.body.arena || existingTeam.arena,
            "coach": req.body.coach || existingTeam.coach,
            "gm": req.body.gm || existingTeam.gm,
            "owner": req.body.owner || existingTeam.owner,
            "captain": req.body.captain || existingTeam.captain,
            "stanley_cups": req.body.stanley_cups || existingTeam.stanley_cups,
            "affiliate": req.body.affiliate || existingTeam.affiliate,
            "points_leader": {
                "player": (req.body.points_leader && req.body.points_leader.player) || existingTeam.points_leader.player,
                "points": (req.body.points_leader && req.body.points_leader.points) || existingTeam.points_leader.points
            }
        };
    
        const searchIndex = teams.findIndex((team) => teams.id === id);
        teams[searchIndex] = replacementTeam;
        res.json(replacementTeam);
    }
    
});

//make a GM, coach or captain be vacant
app.patch('/teams/:id/vacate', (req, res) => {
    const id = parseInt(req.params.id);
    const team = teams.find(team => team.id === id);

    if (!team) {
        return res.status(404).json({ error: `No team found with ID ${id}.` });
    }

    const { coach, gm, captain } = req.body;

    if (coach) {
        team.coach = "Vacant";
    }

    if (gm) {
        team.gm = "Vacant";
    }

    if (captain) {
        team.captain = "Vacant";
    }

    res.json({ message: `Team ID ${id} updated.`, team });
});

//delete a team based on it's ID
app.delete('teams/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const searchIndex = teams.findIndex((team) => team.id === id);
    if (!existingPost){
        return res.status(404).json({error: `No team with ID ${id} found. No team was deleted`}) 
    } else {
        teams.splice(searchIndex, 1);
        res.sendStatus(200);
        res.json(teams);
    }
});

//delete all teams based on a particular attribute's value
app.delete('/teams/:attribute/:value', (req, res) => {
    const attribute = req.params.attribute;
    const value = req.params.value.toLowerCase();
    const initialLength = teams.length;

    if (!teams[0].hasOwnProperty(attribute)) {
        return res.status(400).json({ error: `Invalid attribute: ${attribute}` });
    }

    teams = teams.filter(team => {
        const teamValue = team[attribute];
        return teamValue.toString().toLowerCase() !== value;
    });

    if (teams.length === initialLength) {
        return res.status(404).json({ error: `No teams found with ${attribute} = ${value}.` });
    }

    res.status(204).send();
});


//delete all teams if the user inputs the correct master key
app.delete('/delete-all', (req, res) => {
    const userKey = req.query.key;
    if (userKey === masterKey){
        teams = [];
        res.sendStatus(200);
    } else {
        return res.status(404).json({error: `Incorrect master key. No teams were deleted`}) 
    }
});

//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});