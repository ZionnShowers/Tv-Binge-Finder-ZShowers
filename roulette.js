//Grab the page element
const spinBtn = document.getElementById("spin");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

//Add our event listeners
spinBtn.addEventListener("click", async function () {
    //1.pick a random show id from 1 to 240
    const id = Math.floor(Math.random() * 240) + 1;

    resultEl.textContent = "";

    statusEl.textContent = "Spinning.... channel #" + id;

    //2. Ask the API fot the show

    const res = await fetch("https://api.tvmaze.com/shows/" + id)

    //3. fetch does NOT return a 404, so we check ourselves
    if (!res.ok) {
        statusEl.textContent = "Error find show spin again"
        return
    }
    // 4. Turn JSON into Javascript object
    const show = await res.json()
    statusEl.textContent = "";
    //5. Draw it on our page
    if (show.image) {
        const img = document.createElement("img");
        img.src = show.image.medium;
        resultEl.appendChild(img);

    }
    const title = document.createElement("h2");
    title.textContent = show.name;
    resultEl.appendChild(title);

    // const rating = document.createElement("h2");
    // rating.textContent = show.rating.average;
    // resultEl.appendChild(rating);

    // //
    console.log(show.rating.average);
    const rating = document.createElement("p");
    if(show.rating.average) {
        rating.textContent = show.rating.average;
    } else {
        rating.textContent = "No rating";
    }
    resultEl.appendChild(rating);
});