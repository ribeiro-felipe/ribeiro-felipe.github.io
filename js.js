const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['towns'];
    for (let i = 0; i < prophets.length; i++) {

        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p_one = document.createElement('p');
        let p_two = document.createElement("p");
        let p_three = document.createElement("p");
        let p_four = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = towns[i].name;

        card.appendChild(h2);

        p_one.textContent = towns[i].motto;
        p_one.setAttribute("id", "home-motto");

        card.append(p_one);

        p_two.textContent = "Year Founded: " + towns[i].yearFounded;
        p_two.setAttribute("id", "home-year");

        card.append(p_two);

        p_three.textContent = "Population: " + towns[i].currentPopulation;
        p_three.setAttribute("id", "home-pop");

        card.append(p_three);

        p_four.textContent = "Annual Rainfall: " + towns[i].averageRainfall + "in.";
        p_four.setAttribute("id", "home-rain");


        card.append(p_four);

        image.setAttribute("src", "images/" + towns[i].photo);
        image.setAttribute("id", "home-images");
        image.setAttribute("alt", towns[i].name);

        card.append(image);

        document.querySelector('div.cards').appendChild(card);
    } // temporary checking for valid response and data parsing
})



const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {


            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                card.setAttribute("id", "home-section");
                let h2 = document.createElement('h2');
                let p_one = document.createElement('p');
                let p_two = document.createElement("p");
                let p_three = document.createElement("p");
                let p_four = document.createElement("p");
                let image = document.createElement("img");

                h2.textContent = towns[i].name;
                h2.setAttribute("id", "home-data-name");

                card.appendChild(h2);

                image.setAttribute("src", "images/" + towns[i].photo);
                image.setAttribute("id", "s-images");
                image.setAttribute("alt", towns[i].name);

                card.append(image);

                p_one.textContent = towns[i].motto;
                p_one.setAttribute("id", "s-motto");

                card.append(p_one);

                p_two.textContent = "Year Founded: " + towns[i].yearFounded;
                p_two.setAttribute("id", "s-year");

                card.append(p_two);

                p_three.textContent = "Population: " + towns[i].currentPopulation;
                p_three.setAttribute("id", "s-population");

                card.append(p_three);

                p_four.textContent = "Annual Rainfall: " + towns[i].averageRainfall + "in.";
                p_four.setAttribute("id", "s-rain");


                card.append(p_four);

                document.querySelector('div.cards').appendChild(card);
            };
        } // temporary checking for valid response and data parsing
    });