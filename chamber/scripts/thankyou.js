const params = new URLSearchParams(window.location.search);

params.get('first');
params.get('last');
params.get('email');
params.get('phone');
params.get('business-name');
params.get('timestamp');

document.querySelector('#name').textContent = `${params.get('first')} ${params.get('last')}`;
document.querySelector('#email').textContent = `${params.get('email')}`;
document.querySelector('#phone').textContent = `${params.get('phone')}`;
document.querySelector('#business').textContent = `${params.get('business-name')}`;
document.querySelector('#timestamp').textContent = `${params.get('timestamp')}`;