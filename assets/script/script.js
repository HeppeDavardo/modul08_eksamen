// Header animation
const header = document.querySelector("header");
const landingpage = document.querySelector(".landingpage");

const navLogo = document.querySelector(".navLogo");
const ctaBookBord = document.querySelector(".ctaBookBord");

const landingpageOptions =  {
    rootMargin: "-200px 0px 0px 0px"
};

const landingpageObserver = new IntersectionObserver(function(entries, landingpageObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("fullHeader");
            navLogo.classList.add("showNavLogo");
            ctaBookBord.classList.add("showCtaBookBord");
            
        } else {
            header.classList.remove("fullHeader");
            navLogo.classList.remove("showNavLogo");
            ctaBookBord.classList.remove("showCtaBookBord");
        }
    })
}, landingpageOptions);

landingpageObserver.observe(landingpage);

//Aktiv navigation refereret fra: https://www.youtube.com/watch?v=JkuiKeNS2mg&t
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
});