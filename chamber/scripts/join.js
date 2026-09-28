document.querySelector('#timestamp').value = new Date().toLocaleString('en-US', {dateStyle: 'long', timeStyle: 'short'});

document.querySelectorAll('[data-level]').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.querySelector(`#${btn.dataset.level}-modal`);
        modal.showModal();
    });    
});

document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('dialog').close();
    });
});

document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
});