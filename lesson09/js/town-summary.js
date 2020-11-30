const townDataUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';
const townCardsElement = document.getElementById('town-cards');
const townNames = ['Fish Haven', 'Preston', 'Soda Springs'];

fetch(townDataUrl)
   .then(response => response.json())
   .then(data => {
      for (town of data.towns) {
         if (townNames.includes(town.name)) {
            let townCard = document.createElement('div');
            townCard.setAttribute('class', 'town-card');
            let h = `<div class="town-summary">
                         <h4 class="town-title">${town.name}</h4>
                         <p class="town-motto">${town.motto}</p>
                         <ul class="town-info-items">
                           <li>Year Founded: ${town.yearFounded}</li>
                           <li>Population: ${town.currentPopulation}</li>
                           <li>Annual Rainfall: ${town.averageRainfall}</li>
                         </ul>
                        </div>
                        <div class="town-image">
                          <img src="images/${town.photo}" alt="${town.name + ' ' + town.motto}">
                        </div>
                       </div> <!-- end town-summary -->
                     `;
            townCardsElement.appendChild(townCard);
            townCard.innerHTML = h;
         }
      }
   });
