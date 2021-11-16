// use class
// build a class constructor
// colect inputs
// render cards based oninouts

class TvShow {
    constructor() {
        this.show = {
            title: "",
            genre: "",
            platform: "",
            channel: "",
            seasons: 1,
            direcrotrs: "",
            writers: "",
            yearBegan: "",
            yearEnded: "present",
            rating: ""
        };
    };

    button() {
        let button = document.querySelector(".submit-button");
        button.addEventListener("click", this.displayData)
    }

    displayData(e) {

            e.preventDefault();

            let inputTitle = document.getElementById("inputTitle").value;
            let inputGenre = document.getElementById("inputGenre").value;
            let inputPlatform = document.getElementById("inputPlatform").value;
            let inputChannel = document.getElementById("inputChannel").value;
            let inputSeasons = document.getElementById("inputSeasons").value;
            let inputDirectors = document.getElementById("inputDirectors").value;
            let inputWriters = document.getElementById("inputWriters").value;
            let inputYearBegan = document.getElementById("inputYearBegan").value;
            let inputYearEnded = document.getElementById("inputYearEnded").value;
            let inputRating = document.getElementById("inputRating").value;

            inputYearEnded == "" ? inputYearEnded = "Present": null;

            inputSeasons == "" ? inputSeasons = "1" : null

            this.show = {
                title: inputTitle,
                genre: inputGenre,
                platform: inputPlatform,
                channel: inputChannel,
                seasons: inputSeasons,
                directors: inputDirectors,
                writers: inputWriters,
                yearBegan: inputYearBegan,
                yearEnded: inputYearEnded,
                rating: inputRating
            };

            let cardDisplay = document.getElementById("cardDisplay");

            cardDisplay.innerHTML += `
                <div class="col-mb-4">
                    <div class="card show-card">
                        <h2 class="title">${this.show.title}</h2>
                        <p class="genre">${this.show.genre}</p>
                        <p class="platform">${this.show.platform}</p>
                        <p class="channel">${this.show.channel}</p>
                        <p class="seasons"><span id="nuSeasons">${this.show.seasons}</span></p>
                        <p class="directors">${this.show.directors}</p>
                        <p class="writers">${this.show.writers}</p>
                        <p class="seriesBegan">${this.show.yearBegan}</p>
                        <p><span class="seriesBegan">${this.show.yearBegan}</span> - <span class="seriesEnded">${this.show.yearEnded}</span></p>
                        <p class="rating">${this.show.rating}</p>
                    </div>
                </div>
            `
    };
};

let action = new TvShow();
action.button();