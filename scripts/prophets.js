const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetsData() { 
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetsData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement('section');

        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const dateBirth = document.createElement('p')
        dateBirth.textContent = `Date of Birth: ${prophet.birthdate}`;

        const placeBirth = document.createElement('p');
        placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`

        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '325');
        portrait.setAttribute('height', '400');

        card.appendChild(fullName);        
        card.appendChild(dateBirth);        
        card.appendChild(placeBirth);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}