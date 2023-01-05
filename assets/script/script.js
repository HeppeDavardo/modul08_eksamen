// Header animation
const header = document.querySelector("header");
const landingpage = document.querySelector(".landingpage");

const navLogo = document.querySelector(".navLogo");
const ctaBookBord = document.querySelector(".ctaBookBord");

const landingpageOptions =  {
    rootMargin: "-150px 0px 0px 0px"
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