let counter = 0;
const array_of_players = [
  "../imges/playersImages/ike.png",
  "../imges/playersImages/ron.png",
  "../imges/playersImages/jabari.png",
  "../imges/playersImages/marshon.png",
  "../imges/playersImages/lorenzo.png",
  "../imges/playersImages/casspi.png",
  "../imges/playersImages/alex.png",
  "../imges/playersImages/tyler.png",
  "../imges/playersImages/kennnan.png",
  "../imges/playersImages/marcin.png",
  "../imges/playersImages/bogout.png",
  "../imges/playersImages/anir.png",
  "../imges/playersImages/malachi.png",
  "../imges/playersImages/billy.png",
  "../imges/playersImages/jd.png",
  "../imges/playersImages/kosta.png",
  "../imges/playersImages/morton.png",
  "../imges/playersImages/randolph.png",
  "../imges/playersImages/smith.png" ,
  "../imges/playersImages/milos.png",
  "../imges/playersImages/trent.png" ,
  "../imges/playersImages/zahu.png", 
  "../imges/playersImages/boban.png",
  "../imges/playersImages/booker.png",
  "../imges/playersImages/some.png"

];
const players_Div = document.getElementById("playersDiv");
const optionsB = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  },
};




async function getApiPlayers(){
  try {
    players_Div.innerHTML=`
    <h1 class="display-1">Loading...</h1>
    <img src="../imges/playersImages/wallpaperr.png" alt="">
    `
    return await fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25", optionsB)
    .then((response) => response.json())
  }
   catch (err) {
    console.error(err)
  }
  finally{
    players_Div.innerHTML=` `
  }
}


function printPlayersDet(){
  getApiPlayers()
  .then((response) =>
    response.data.forEach((element) => {
      players_Div.innerHTML += `<div class="card" style="width: 15rem;">
    <div class="card-body">
    <img class="img-fluid" src="${
      array_of_players[counter++]
    }" class="card-img-top">
    <h1>${element["first_name"]}</h1>
    <h3>${element["last_name"]}</h3>
    <p>Number: ${element["id"]}</p>
    <p>Position: ${element["position"]}
    </div>
    </div>
    `;
    })
  )
}
printPlayersDet()
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/statistics', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));






//   Active Cases_text: ""
// Country_text: "USA"
// Last Update: "2022-07-30 08:21"
// New Cases_text: ""
// New Deaths_text: ""
// Total Cases_text: "93,054,184"
// Total Deaths_text: "1,055,020"
// Total Recovered_text: "88,011,783"