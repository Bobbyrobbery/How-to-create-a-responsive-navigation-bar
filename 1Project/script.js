const hamburgers = document.querySelector('.hamburger2');
const navLinks = document.querySelector('.navbar');
const links = document.querySelector('.navbar li');

hamburgers.addEventListener('click',()=>{
    //Animate Links
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })

    //Hmaburgers Animation 

    hamburgers.classList.toggle('toggle');
})