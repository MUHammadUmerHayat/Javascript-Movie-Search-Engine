// Function called and search button is clicked.
function newSearch() {
    document.getElementById("row").innerHTML = "";
    var searchTerm = document.getElementById("search").value;
    //var searchTerm = "avengers";
    const row = document.getElementById("row");

    // API fetching setup using XMLHttpRequest Javascript
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => { // In this script the on state change method was not working but onload works fine
        if (request.readyState == 4 && request.status >= 200) {
            console.log("success");
            data = JSON.parse(request.responseText);
            var data = data.Search
            data.forEach((movie) => {
                const md3 = document.createElement("div");
                md3.setAttribute("class", "col-md-3");

                const h1 = document.createElement("h5");
                h1.textContent = movie.Title;

                const releaseDate = document.createElement('p');
                releaseDate.textContent = "Released In: " + movie.Year;

                const id = document.createElement('a');
                id.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID);
                id.textContent = "Read More";

                const picture = document.createElement('img');
                picture.setAttribute("src", movie.Poster);
                picture.setAttribute("class", "img-fluid")

                row.appendChild(md3);
                md3.appendChild(h1);
                md3.appendChild(picture);
                md3.appendChild(releaseDate);
                md3.appendChild(id);


            });
        } else {
            console.log("failed", request);
        }
    }
	
	// Comments for myself
    // The other method to replace onreadystatechange could be onload means something like this:
    // request.onload = () => Do something with the Data
    // Onload tells that the request has been completed successfuly.

    request.open('GET', 'http://www.omdbapi.com/?s=' + searchTerm + '&r=json&plot=short&apikey=3bd68bb6', false);
    request.send();

}