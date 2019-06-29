const url = param => `https://swapi.co/api/${param}/`;

fetch(url("people"))
.then(response => response.json())
.then(data => {
  let people = data.results;
  console.log(people);
  return people.map(film => {
    const div = document.createElement("div");
    const element = document.getElementById("film");
    element.appendChild(div);
    const p = document.createElement("p");
    const text = document.createTextNode(`
    ${film.birth_year}
    ${film.created}
    ${film.edited}
    ${film.eye_color}
    ${film.gender}
    ${film.hair_color}
    ${film.height}
    ${film.mass}
    ${film.name}
    ${film.skin_color}
    `);    
    p.appendChild(text);
    div.appendChild(p);
  })
})
.catch(function(error) {
  console.log(error);
});  

fetch(url("films"))
.then(response => response.json())
.then(data => {
  let films = data.results;
  console.log(films);
  return films.map(film => {
    const div = document.createElement("div");
    const element = document.getElementById("film");
    element.appendChild(div);
    const p = document.createElement("p");
    const text = document.createTextNode(`
    ${film.title }
    `);    
    p.appendChild(text);
    div.appendChild(p);
  })
})
.catch(function(error) {
  console.log(error);
});  