const levels = {1: 'Member', 2: 'Silver', 3: 'Gold'};

const url = "data/members.json";
const spotlightsContainer = document.querySelector('#spotlights');

async function getSpotlightData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data  = await response.json();
            const eligible = data.companies.filter(company => company.membershipLevel === 2 || company.membershipLevel === 3);
            const chosen = eligible.sort(() => Math.random() - 0.5).slice(0, 3);
            displaySpotlights(chosen);
        } else {
            throw Error("Error fetching data.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }    
}

const displaySpotlights = (members) => {
    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('card');

        const companyName = document.createElement('h2');
        companyName.textContent = `${member.name}`;

        const companyTagline = document.createElement('p');
        companyTagline.textContent = `${member.tagline}`;

        const badge = document.createElement('p');
        badge.textContent = levels[member.membershipLevel];
        badge.classList.add('badge');

        const labelAddress = document.createElement('strong');
        labelAddress.textContent = 'Address: ';

        const companyAddress = document.createElement('p');
        companyAddress.appendChild(labelAddress);
        companyAddress.append(member.address);
        
        const labelNumber = document.createElement('strong');
        labelNumber.textContent = 'Phone: ';

        const companyPhoneNumber = document.createElement('p');
        companyPhoneNumber.appendChild(labelNumber);
        companyPhoneNumber.append(member.phoneNumber);

        const companyUrl = document.createElement('a');
        companyUrl.setAttribute('href', member.url);
        companyUrl.setAttribute('target', '_blank')
        companyUrl.textContent = new URL(member.url).hostname.replace("www.", "");

        const companyImage = document.createElement('img');
        companyImage.setAttribute('src', `images/${member.image}`);
        companyImage.setAttribute('alt', "");
        companyImage.setAttribute('loading', 'lazy');
        companyImage.setAttribute('width', '600');
        companyImage.setAttribute('height', '400');

        const cardHeader = document.createElement('div');
        cardHeader.appendChild(companyName);
        cardHeader.appendChild(companyTagline);
        cardHeader.classList.add('card-header');

        const cardBody = document.createElement('div');
        cardBody.appendChild(companyImage);

        const cardInfo = document.createElement('div');
        cardInfo.appendChild(companyAddress);
        cardInfo.appendChild(companyPhoneNumber);
        cardInfo.appendChild(companyUrl); 
        cardInfo.classList.add('card-info');

        cardBody.classList.add('card-body');

        cardBody.appendChild(cardInfo);        
        
        card.appendChild(cardHeader);
        card.appendChild(badge);
        card.appendChild(cardBody);

        spotlightsContainer.appendChild(card);
    })
}

getSpotlightData();