const requestURL = 'https://ribeiro-felipe.github.io/Scoots/Rentals/data/rentals.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const rentals = jsonObject['rentals'];
    for (let i = 0; i < rentals.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p_one = document.createElement('p');
        let p_two = document.createElement("p");
        let p_three = document.createElement("p");
        // let image = document.createElement("img");

        h2.textContent = rentals[i].name;

        card.appendChild(h2);

        p_one.textContent = "Capacity: " + rentals[i].capacity;

        card.append(p_one);

        p_two.textContent = "Reservation";

        card.append(p_two);

        p_three.textContent = "Half Day: $" + rentals[i].rhalfday;

        card.append(p_three);

        // image.setAttribute("src", prophets[i].imageurl);
        // image.setAttribute("alt", prophets[i].name + " - " + [i + 1]);

        // card.append(image);

        document.querySelector('div.cards').appendChild(card);
    } // temporary checking for valid response and data parsing
});