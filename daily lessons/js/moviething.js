// get 6 movies. title genre cast director year. pit them in a nested object

let movies = {
    "001": {
        title: "Napoleon Dynamite",
        genre: "Comedy",
        cast: ["Jon Heder", " Jon Gries", " Aaron Ruell", " Efren Ramirez", " Tina Majorino", " Deidrich Bader"],
        director: "Jared Hess",
        year: "June 11th, 2004"
    },
    "002": {
        title: "Saving Private Ryan",
        genre: "Epic War",
        cast: ["Tom Hanks", " Edward", " Matt Damon", " Tom Sizemore"],
        director: "Steven Spielburg",
        year: "July 24th, 1998"
    },
    "003": {
        title: "Seven Samurai",
        genre: "Epic Samurai Drama",
        cast: ["Toshiro Mifune", " Takashi Shimura", " Keiko Tsushima", " Isao Kimura", " Daisuke Katou"],
        director: "Akira Kurosawa",
        year: "April 26th, 1954"
    },
    "004": {
        title: "Stalker",
        genre: "Science Fiction Art Drama",
        cast: ["Alisa Freindlich", " Alexander Kaidanovsky", " Antaoly Solonitsyn", " Nikolai Grinko"],
        director: "Andrei Tarkovsky",
        year: "May 25th, 1979"
    },
    "005": {
        title: "REDLINE",
        genre: "Animated Science Fiction",
        cast: ["Takuya Kimura", " Yuu Aoi", " Yoshinori Okada", " Kanji Tsuda", " Yoshiyuki Morishita"],
        director: "Takeshi Koike",
        year: "October 9, 2010"
    },
    "006": {
        title: "Jackass",
        genre: "Reality Slapstick Comedy",
        cast: ["Johnny Knoxville", " Steve-O", " Bam Margera", " Chris Pontius", " Ryan Dunn", " Ehren McGhehey", " Jason Acuna", " Preston Lacy", " Dave England"],
        director: "Jeff Tremaine",
        year: "October 25th, 2002"
    }
}

var header = document.querySelector('.header');
var movieCard = document.querySelectorAll('.movie-card');
var movieTitle = document.querySelectorAll(`.movie-title`);
var genre = document.querySelectorAll('.genre');
var cast = document.querySelectorAll('.cast');
var director = document.querySelectorAll('.director')
var year = document.querySelectorAll('.year');

var dataList = [
    movieCard,
    movieTitle,
    genre,
    cast,
    director,
    year
];

movieCard.forEach(item =>{
    for (key in movies) {
        item.children[0].innerText = movies[key].title
        item.children[1].innerText = movies[key].genre
        item.children[2].innerText = movies[key].cast
        item.children[3].innerText = movies[key].director
        item.children[4].innerText = movies[key].year
        delete movies[key];
        break;
    }
})

const titleData = movies[key].title;
const genreData = movies[key].genre;
const castData = movies[key].cast;
const directorData = movies[key].director;
const yearData = movies[key].year;

// for (const key in movies) {

//         for (let element of movieTitle) {
//             if (element.innerText == "Title") {
//                 element.innerText = title;
//                 break;
//             }
//         }

//         for (let element of genre) {
//             if (element.innerText == "Genre") {
//                 element.innerText = genreData;
//                 break;
//             }
//         }

//         for (let element of cast) {
//             if (element.innerText == "Cast") {
//                 element.innerText = castData;
//                 break; 
//             }
//         }

//         for (let element of director) {
//             if (element.innerText == "Director") {
//                 element.innerText = directorData;
//                 break;
//             }
//         }

//         for (let element of year) {
//             if (element.innerText == "Year") {
//                 element.innerText = yearData;
//                 break;
//             }
//         }
// }

