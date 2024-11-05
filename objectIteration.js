// DO NOT MODIFY OR DELETE `movies`
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

// Q1: Write a `hasKey` function that takes two arguments, an object and a key.
// The function should return true if the object contains  the specified key, and false otherwise.
function hasKey(obj, key) {
    // Checking if the object has the specified key using the in operator
    return key in obj; // Return true if the key exists, otherwise return false
}

// Q2: Write a `printMovieTitles` function that accepts an array of objects called 'movies'
// and iterates through it to print the titles of all the movies.
function printMovieTitles(movies) {
    // Iterate over each movie object in the movies array
    for (const movie of movies) {
      // Print the title of the current movie using dot notation
      console.log(movie.title); // Access the title property of the movie object
    }
}

// Q3: Write a `countMoviesByYear` function that accepts an array of objects called 'movies'
// and a year
// and returns the number of movies that were released in that year.
function countMoviesByYear(movies, year) {
   // am using the filter method to create a new array of movies that match the specified year
   const filteredMovies = movies.filter(movie => movie.year === year); // Check each movie's year against the input year
   // Return the length of the filteredMovies array to get the count
   return filteredMovies.length; // Returns the number of movies released in that year
 
}

// Q4: Write a `updateMovieGenre` function that accepts a title and a new genre
// and updates the genre of the given movie, if it exists,
// then returns the modified array of movies.
// Hint: use array iterator .find
function updateMovieGenre(movies, title, newGenre) {
    // Using the find method to locate the movie object with the matching title
    const movieToUpdate = movies.find(movie => movie.title === title); // Searches for the movie by title
    // If a matching movie is found, update its genre property
    if (movieToUpdate) { // Check if the movie exists
      movieToUpdate.genre = newGenre; // Update the genre of the found movie
    }
    // Return the modified array of movies
    return movies; // Return the updated array of movies
  
}

module.exports = {
  hasKey,
  printMovieTitles,
  countMoviesByYear,
  updateMovieGenre,
};
