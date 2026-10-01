import places from "../data/discover.mjs";

const container = document.querySelector('#discover-cards')

places.forEach((place, index) => {
    const card = document.createElement('div');
    card.classList.add('discover-card');
    card.classList.add(`card-${index + 1}`);

    const title = document.createElement('h2');
    title.textContent = place.name;

    const address = document.createElement('address');
    address.textContent = place.address;

    const desc = document.createElement('p');
    desc.textContent = place.description;

    const figure = document.createElement('figure');

    const image = document.createElement('img');
    image.src = place.image;
    image.alt = place.name;
    image.loading = 'lazy';
    image.width = 300;
    image.height = 200;

    figure.appendChild(image);

    const button = document.createElement('button');
    button.textContent = 'Learn more';

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(desc);    
    card.appendChild(button);

    container.appendChild(card);
});

const visitDisplay =  document.querySelector('#last-visited');
const now = Date.now();

const lastVisit = localStorage.getItem('lastVisit');


if (lastVisit === null) {
    visitDisplay.textContent = "Welcome! Let us know if you have any questions."
} else {
    const difference = now - Number(lastVisit);
    const days = Math.floor(difference / (24 * 60 * 60 * 1000));

    let word = "days";
    if (days === 1) {
        word = "day";
    }

    if(days < 1) {
        visitDisplay.textContent = "Back so soon! Awesome!";
    } else {
        visitDisplay.textContent = `You last visited ${days} ${word} ago.`
    }
}

localStorage.setItem('lastVisit', now);