(() => {
    if (!localStorage.hasOwnProperty('sessionUser')) {
        document.location.href = 'mail.html';
    }
})();