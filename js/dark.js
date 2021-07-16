const modoNocturno = document.querySelector('#btnDarkMode');

modoNocturno.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // guardo el modo en localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

//obtengo el modo actual

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}


