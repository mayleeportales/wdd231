document.getElementById('currentYear').textContent = new Date().getFullYear();

const lastModified = new Date(document.lastModified);

const formattedDate = lastModified.toLocaleString(undefined, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});

document.getElementById('lastModified').textContent = `Last Modification: ${formattedDate}`;