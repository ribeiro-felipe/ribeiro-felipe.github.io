const requestURL = 'https://ribeiro-felipe.github.io/Scoots/Rentals/data/rentals.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const rentals = jsonObject['rentals'];
    for (let i = 0; i < rentals.length; i++) {
        let image = document.createElement("img");
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p_one = document.createElement('p');
        let p_two = document.createElement("p");
        let p_three = document.createElement("p");
        let p_four = document.createElement("p");
        let p_five = document.createElement("p");


        image.setAttribute("src", rentals[i].imgurl);
        image.setAttribute("alt", rentals[i].name);

        card.append(image);

        h2.textContent = rentals[i].name;

        card.appendChild(h2);

        p_one.textContent = "Capacity: " + rentals[i].capacity;

        card.append(p_one);

        p_two.textContent = "Reservation";

        card.append(p_two);

        p_three.textContent = "Half Day: $" + rentals[i].rhalfday + " / Full Day: $" + rentals[i].rfullday;

        card.append(p_three);

        p_four.textContent = "Walk-In";

        card.append(p_four);

        p_five.textContent = "Half Day: $" + rentals[i].whalfday + " / Full Day: $" + rentals[i].wfullday;

        card.append(p_five);

        document.querySelector('div.cards').appendChild(card);
    }
});