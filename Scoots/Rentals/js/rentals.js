const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p_one = document.createElement('p');
        let p_two = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

        card.appendChild(h2);

        p_one.textContent = "Date of Birth: " + prophets[i].birthdate;

        card.append(p_one);

        p_two.textContent = "Place of Birth: " + prophets[i].birthplace;

        card.append(p_two);

        image.setAttribute("src", prophets[i].imageurl);
        image.setAttribute("alt", prophets[i].name + " - " + [i + 1]);

        card.append(image);

        document.querySelector('div.cards').appendChild(card);
    } // temporary checking for valid response and data parsing
});