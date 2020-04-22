//Movie DB Exercise -- create an array of movie objects and print out statements.

var movies = [
{
    title: "Peter Pan",
    hasWatched: false,
    Rating: "3 stars"
},

{
    title: "Fast and Furious",
    hasWatched: true,
    Rating: "4.5 stars"
},

{
    title: "Robin Hood",
    hasWatched: true,
    Rating: "4 stars"
}


];

movies.forEach(function(movie) {

var result = "You have ";

if(movie.hasWatched == true){

    result += "watched ";
} else {
    result += "not watched ";
};

result += movie.title + " - "+ movie.Rating;

console.log(result);
    
});
