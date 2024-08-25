const links = document.querySelectorAll('a[href*="#"]');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const blockId = link.getAttribute('href').substring(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})