const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

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
        "general_manager": "Pat Verbeek",
        "owner": "Henry Samueli",
        "captain": "Vacant",
        "number_of_stanley_cups": 1,
        "ahl_affiliate": "San Diego Gulls",
        "all_time_points_leader": {
          "player": "Teemu Selanne",
          "points": 988
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
        "general_manager": "Don Sweeney",
        "owner": "Jeremy Jacobs",
        "captain": "Brad Marchand",
        "number_of_stanley_cups": 6,
        "ahl_affiliate": "Providence Bruins",
        "all_time_points_leader": {
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
        "general_manager": "Kevyn Adams",
        "owner": "Terry Pegula",
        "captain": "Vacant",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "Rochester Americans",
        "all_time_points_leader": {
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
        "general_manager": "Craig Conroy",
        "owner": "Calgary Sports and Entertainment Corporation",
        "captain": "Mikael Backlund",
        "number_of_stanley_cups": 1,
        "ahl_affiliate": "Calgary Wranglers",
        "all_time_points_leader": {
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
        "general_manager": "Eric Tulsky",
        "owner": "Tom Dundon",
        "captain": "Jordan Staal",
        "number_of_stanley_cups": 1,
        "ahl_affiliate": "Chicago Wolves",
        "all_time_points_leader": {
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
        "general_manager": "Kyle Davidson",
        "owner": "Wirtz Corporation",
        "captain": "Vacant",
        "number_of_stanley_cups": 6,
        "ahl_affiliate": "Rockford IceHogs",
        "all_time_points_leader": {
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
        "general_manager": "Chris MacFarland",
        "owner": "Stan Kroenke",
        "captain": "Gabriel Landeskog",
        "number_of_stanley_cups": 3,
        "ahl_affiliate": "Colorado Eagles",
        "all_time_points_leader": {
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
        "general_manager": "Don Waddell",
        "owner": "John P. McConnell",
        "captain": "Boone Jenner",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "Cleveland Monsters",
        "all_time_points_leader": {
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
        "general_manager": "Jim Nill",
        "owner": "Tom Gaglardi",
        "captain": "Jamie Benn",
        "number_of_stanley_cups": 1,
        "ahl_affiliate": "Texas Stars",
        "all_time_points_leader": {
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
        "general_manager": "Steve Yzerman",
        "owner": "Ilitch Holdings",
        "captain": "Dylan Larkin",
        "number_of_stanley_cups": 11,
        "ahl_affiliate": "Grand Rapids Griffins",
        "all_time_points_leader": {
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
        "general_manager": "Ken Holland",
        "owner": "Daryl Katz",
        "captain": "Connor McDavid",
        "number_of_stanley_cups": 5,
        "ahl_affiliate": "Bakersfield Condors",
        "all_time_points_leader": {
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
        "general_manager": "Bill Zito",
        "owner": "Vincent Viola",
        "captain": "Aleksander Barkov",
        "number_of_stanley_cups": 1,
        "ahl_affiliate": "Charlotte Checkers",
        "all_time_points_leader": {
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
        "general_manager": "Rob Blake",
        "owner": "Philip Anschutz",
        "captain": "Anže Kopitar",
        "number_of_stanley_cups": 2,
        "ahl_affiliate": "Ontario Reign",
        "all_time_points_leader": {
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
        "general_manager": "Bill Guerin",
        "owner": "Craig Leipold",
        "captain": "Jared Spurgeon",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "Iowa Wild",
        "all_time_points_leader": {
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
        "general_manager": "Kent Hughes",
        "owner": "Geoff Molson",
        "captain": "Nick Suzuki",
        "number_of_stanley_cups": 24,
        "ahl_affiliate": "Laval Rocket",
        "all_time_points_leader": {
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
        "general_manager": "Barry Trotz",
        "owner": "Predators Holdings LLC",
        "captain": "Roman Josi",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "Milwaukee Admirals",
        "all_time_points_leader": {
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
        "general_manager": "Tom Fitzgerald",
        "owner": "Joshua Harris & David Blitzer",
        "captain": "Nico Hischier",
        "number_of_stanley_cups": 3,
        "ahl_affiliate": "Utica Comets",
        "all_time_points_leader": {
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
        "general_manager": "Lou Lamoriello",
        "owner": "Scott Malkin",
        "captain": "Anders Lee",
        "number_of_stanley_cups": 4,
        "ahl_affiliate": "Bridgeport Islanders",
        "all_time_points_leader": {
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
        "general_manager": "Chris Drury",
        "owner": "James Dolan",
        "captain": "Jacob Trouba",
        "number_of_stanley_cups": 4,
        "ahl_affiliate": "Hartford Wolf Pack",
        "all_time_points_leader": {
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
        "general_manager": "Steve Staios",
        "owner": "Michael Andlauer",
        "captain": "Brady Tkachuk",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "Belleville Senators",
        "all_time_points_leader": {
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
        "general_manager": "Daniel Briere",
        "owner": "Comcast Spectacor",
        "captain": "Sean Couturier",
        "number_of_stanley_cups": 2,
        "ahl_affiliate": "Lehigh Valley Phantoms",
        "all_time_points_leader": {
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
        "general_manager": "Kyle Dubas",
        "owner": "Fenway Sports Group",
        "captain": "Sidney Crosby",
        "number_of_stanley_cups": 5,
        "ahl_affiliate": "Wilkes-Barre/Scranton Penguins",
        "all_time_points_leader": {
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
        "general_manager": "Mike Grier",
        "owner": "San Jose Sports & Entertainment Enterprises",
        "captain": "Logan Couture",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "San Jose Barracuda",
        "all_time_points_leader": {
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
        "general_manager": "Ron Francis",
        "owner": "Seattle Hockey Partners",
        "captain": "Vacant",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "Coachella Valley Firebirds",
        "all_time_points_leader": {
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
        "general_manager": "Doug Armstrong",
        "owner": "Tom Stillman",
        "captain": "Brayden Schenn",
        "number_of_stanley_cups": 1,
        "ahl_affiliate": "Springfield Thunderbirds",
        "all_time_points_leader": {
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
        "general_manager": "Julien BriseBois",
        "owner": "Jeffrey Vinik",
        "captain": "Steven Stamkos",
        "number_of_stanley_cups": 3,
        "ahl_affiliate": "Syracuse Crunch",
        "all_time_points_leader": {
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
        "general_manager": "Brad Treliving",
        "owner": "Maple Leaf Sports & Entertainment",
        "captain": "Auston Matthews",
        "number_of_stanley_cups": 13,
        "ahl_affiliate": "Toronto Marlies",
        "all_time_points_leader": {
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
        "general_manager": "Bill Armstrong",
        "owner": "Ryan Smith",
        "captain": "Vacant",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "Tucson Roadrunners",
        "all_time_points_leader": {
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
        "general_manager": "Patrik Allvin",
        "owner": "Francesco Aquilini",
        "captain": "Quinn Hughes",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "Abbotsford Canucks",
        "all_time_points_leader": {
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
        "general_manager": "Kelly McCrimmon",
        "owner": "Bill Foley",
        "captain": "Mark Stone",
        "number_of_stanley_cups": 1,
        "ahl_affiliate": "Henderson Silver Knights",
        "all_time_points_leader": {
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
        "general_manager": "Brian MacLellan",
        "owner": "Monumental Sports & Entertainment",
        "captain": "Alex Ovechkin",
        "number_of_stanley_cups": 1,
        "ahl_affiliate": "Hershey Bears",
        "all_time_points_leader": {
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
        "general_manager": "Kevin Cheveldayoff",
        "owner": "True North Sports & Entertainment",
        "captain": "Adam Lowry",
        "number_of_stanley_cups": 0,
        "ahl_affiliate": "Manitoba Moose",
        "all_time_points_leader": {
          "player": "Blake Wheeler",
          "points": 812
        }
      }
    ];
  
// Simple route
app.get('/', (req, res) => {
    console.log('Hello world!');
    res.send('Hello world!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
