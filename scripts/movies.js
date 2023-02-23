function servercall(filter){
    let api=`http://localhost:3001/moviesData`
    if(filter)
      api=`http://localhost:3001/moviesData?q=${filter}`
      
    fetch(api)
    .then((res) => res.json())
    .then((res) => moviesData(res))
}

var movie ;

function moviesData(data) {
    movie = data;
  document.querySelector("#movies").innerHTML = "";
  data.map(function (e) {
    var div = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("class", "poster");
    image.setAttribute("src", e.poster);

    var name = document.createElement("h3");
    name.innerText = e.name;

    var date = document.createElement("h3");
    date.innerText = e.date;

    var imdb = document.createElement("h3");
    imdb.innerText = "IMDB Rating: " + e.imdb;

    div.append(image, name, date, imdb);

    document.querySelector("#movies").append(div);
  });
}

function ratingsort() {
  let selected = document.getElementById("sortrating").value;
  console.log(selected);

  if (selected == "htl") {
    movie.sort(function (a, b) {
      return b.imdb - a.imdb;
    });
  }

  if (selected == "lth") {
    movie.sort(function (a, b) {
      return a.imdb - b.imdb;
    });
  }

  moviesData(movie);
}


function filtermovies() {
 let selected = document.getElementById("filtergenre").value
 console.log(selected);
servercall(selected)
}

servercall();