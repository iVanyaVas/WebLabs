document.querySelector('#logout').addEventListener('click', () => {
    localStorage.removeItem('sessionUser');
    document.location.href = '/mail.html';
});