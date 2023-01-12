// Header animation refereret fra: https://www.youtube.com/watch?v=RxnV9Xcw914&t
const header = document.querySelector("header");
const landingpage = document.querySelector(".landingpage");

const navLogo = document.querySelector(".navLogo");
const ctaBookBord = document.querySelector(".ctaBookBord");

// Gør sådan at headeren toggler 200px længere oppe på siden
const landingpageOptions =  {
    rootMargin: "-200px 0px 0px 0px"
};

// Vi laver en funktion der kan måle hvornår 2 sectioner krydser hinanden
const landingpageObserver = new IntersectionObserver(function(entries, landingpageObserver) {
    entries.forEach(entry => {
        // Loop der checker om de krydser. hvis ikke de krydser så tilføj classes, hvis de krydser, så fjern classes
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
}, landingpageOptions); // tilføjer vores const fra tidligere

// kalder på vores funktion, og fortæller at den skal observere sectionen med klassen landingpage
landingpageObserver.observe(landingpage); 


// Aktiv navigation refereret fra: https://www.youtube.com/watch?v=JkuiKeNS2mg&t
// finder ud af hvilket dokument der er åbent
const activePage = window.location.pathname;
// finder alle nav tags med a tags inden i, og laver et loop der tjekker om linket inkluderer den åbne side
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    // Hvis den inkluderer den åbne side tilføjes klassen active
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active'); // Vi styler klassen active i vores css dokument
    }
});

// Åben & lukke funktion af hamburger menu
const navToggle = document.querySelector('.mobileMenuToggle');
// Når der bliver klikket på et element med klassen mobileMenuToggle, tilføjes klassen navMenuOpen på body
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('navMenuOpen');
});