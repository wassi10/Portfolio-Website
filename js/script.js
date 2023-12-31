// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
            // Active Sections for Animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll , use this
        else{
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation Footer on Scroll

    // let footer = document.querySelector('footer');
    // footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

//animation

const sr = ScrollReveal ({
    distance: '20px',
    duration: 3000,
    reset: true
});
sr.reveal('.header',{delay: 190, origin: 'left'});
sr.reveal('.home, .heading',{delay: 200, origin: 'top'});
sr.reveal('.about-img, .about-content, .education-row, .skills-content, .projects-content, form, .footer',{delay: 200, origin: 'bottom'});
