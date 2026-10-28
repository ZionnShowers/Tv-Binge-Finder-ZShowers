//STEP 1 Grab the page elements we need
const searchInput = document.getElementById("search");

const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const detailEl = document.getElementById("detail");

//All the shows live in the array once they load
//Search filters THIS array, so searching cost zero network request

let allShows = [];

//Ste2 Place your order: fetch our Tv showsp 

//We need the address
const BASE_URL = "https://api.tvmaze.com";

// Every request goes through this helper function, three steps every time:
//1 Order ---> fetch(url)
//2 Check the plate --> res.ok
//3 unwrap ---> res.json()

async function getJson(path) {
    const response = await fetch(BASE_URL + path);
    return response.json();

}

//Two way to order from menu:
// "/shows?page=0" ---> LIST of shows --> an array (shows)
// "/shows/1". ---> ONE show ---> {} an object (one show);

//Create a function to pull all shows

async function getShows() {
    const data = await getJson("/shows?page=0");
    console.log(data);
    console.log(toCard(data[0]));
}

//Create a function to pull only one show

function getShow(id) {
    return getJson("/show/" + id)
}
console.log(getShows())

function toCard(raw) {
    return {
        id: raw.id,
        name: raw.name,
        genres: raw.genres,
        year: raw.premiered,
        image: raw.image.medium
    };


}