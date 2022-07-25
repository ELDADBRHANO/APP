let div_games = document.getElementById("myDiv_C");
let counter = 0;
const arrayLogos = [
  "/imges/teamsLogo/hawks.png",
  "/imges/teamsLogo/celtics.png",
  "/imges/teamsLogo/nets.png",
  "/imges/teamsLogo/horents.png",
  "/imges/teamsLogo/bulls.png",
  "/imges/teamsLogo/clevlend.png",
  "/imges/teamsLogo/mavricks.png",
  "/imges/teamsLogo/nuggets.png",
  "/imges/teamsLogo/pistons.png",
  "/imges/teamsLogo/golden.png",
  "/imges/teamsLogo/rockets.png",
  "/imges/teamsLogo/pacers.png",
  "/imges/teamsLogo/clippers.png" ,
  "/imges/teamsLogo/lakers.png",
  "/imges/teamsLogo/grizllies.png",
  "/imges/teamsLogo/heat.png",
  "/imges/teamsLogo/bucks.png",
  "/imges/teamsLogo/minesotta.png",
  "/imges/teamsLogo/new-orleans.png",
  "/imges/teamsLogo/knicks.png",
  "/imges/teamsLogo/thunder.png",
  "/imges/teamsLogo/magic.png",
  "/imges/teamsLogo/sixers.png",
  "/imges/teamsLogo/suns.png" ,
  "/imges/teamsLogo/portland.png",
  "/imges/teamsLogo/kings.png",
  "/imges/teamsLogo/spurs.png",
  "/imges/teamsLogo/toronto.png",
  "/imges/teamsLogo/jazz.png" ,
  "/imges/teamsLogo/wizards.png"

];


// const optionsC = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d',
// 		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
// 	}
// };

// fetch('https://free-nba.p.rapidapi.com/games?page=0&per_page=25', optionsC)
// 	.then(response => response.json())
// 	.then(response => response.data.forEach(element => {
//     div_games.innerHTML+=`
//     <div>
//     <p>Date: ${element['date']}<p>
//     <p>Home Team: ${element.home_team['city']}</p>
//     <p>Team name: ${element.home_team['full_name']}</p>
//     <p>Home team score: ${element['home_team_score']}<p>
//     `
//   }))
// 	.catch(err => console.error(err));

const optionsA = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  },
};
fetch("https://free-nba.p.rapidapi.com/teams", optionsA)
  .then((response) => response.json())
  .then((response) => {
    response.data.forEach((obj) => {
      div_games.innerHTML += `<div class="card" style="width: 18rem;" >
      <img style="width:10vw;" src="${
        arrayLogos[counter++]
      }"class="card-img-top img-fluid">
      <div class="card-body">
      <div class="card-body">
				<h1 class="card-title">id: ${obj["id"]}</h1>
				<h3 class="card-subtitle mb-2 text-muted">Team: ${obj["full_name"]}</h3>
				<p>Division: ${obj["division"]}</p>
				<p>Conference: ${obj["conference"]}</p>
        </div>
				</div>`;
    });
  })
  .catch((err) => console.log(err));