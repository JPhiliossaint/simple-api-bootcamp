document.querySelector('button').addEventListener('click', ghibli)

function ghibli(){
    let ghibVal = document.querySelector('input').value
    let url = `https://pokeapi.co/api/v2/pokemon/${ghibVal}`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      document.querySelector('img').src = data.sprites.front_default
      document.querySelector('h2').innerText = data.name
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
   
}

// This website returns an array of objects
// I would like the user's input to loop through the objects until 
// it finds one with a matching title property.
//THen display things about the object