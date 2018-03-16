var movies=[
	{
		title: "Battleship",
		hasWatched : true,
		rating: 4.0
	},
	{
		title: "Pacific rim",
		hasWatched : false,
		rating: 4.0
	},
	{
		title: "Starwars",
		hasWatched : false,
		rating: 4.5
	},
	{
		title: "Journey to witch island",
		hasWatched : true,
		rating: 4.3
	},
	{
		title: "In bruges",
		hasWatched : false,
		rating: 5
	}
]

movies.forEach(function(movie){
	if(movie["hasWatched"]){
		console.log("You have watched \""+ movie.title + "\" - "+movie.rating+" stars");
	}
	else{
		console.log("You have not seen \""+movie.title+"\" - "+movie.rating+ " stars");
	}
});