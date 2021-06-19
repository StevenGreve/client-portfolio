/* ++ GLOBAL ++ */

// Copyright
const copyright = document.querySelectorAll(".copyright");

copyright.forEach(copyright => {
    copyright.innerHTML = `Pharaz Azimi &copy; ${new Date().getFullYear()}. All rights reserved.`;
});

/*
    Works Section 
    =============
*/

// Fresco Lightbox – Fallback Image Functionality (In Progress)

var setOnError = (document) => {
    var imgs = document.getElementsByClassName("fr-content-element");
    for(var c = 0; c < imgs.length; c++){
        var element = imgs.item(c);
        element.setAttribute("onerror", "javascript: updateImgSrc(this);");
    }
}

var updateImgSrc = function (img){
    img.src = img.src.substr(0, img.src.lastIndexOf('.')) + '.jpg';
    console.log(img.src);
}

// When you click on the arrow in the bottom navigation, this function will navigate the user to the top of the page 

function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Due to the amount of text that is on the "Sometimes I'm in Control, Sometimes I'm Not" subpage, I decided to replace the text for the specified width below to prevent prevent the layout from changing. 

if(window.innerWidth >= 768 && window.innerWidth <= 1200){
    document.querySelector("#alternative-text").innerText = "A 55 minute performance in public space of the underground line U55 at Berlin’s main station (Hauptbahnhof) – making sure everything is under control!";
}

/*
    Exhibitions Section 
    ===================
*/

/* I'm trying to prevent the error that prevents me from changing the default behavior of the event listener. Error message: [Intervention] Unable   to preventDefault inside event listener due to target being treated as passive. 
Source: https://github.com/inuyaksa/jquery.nicescroll/issues/799 
Status: The attempted fix does not appear to work.  */

document.addEventListener('touchstart', function(){}, {passive: false})

// inside:OUT – Lightbox

$(document).ready(function()
{
    $('.exhibition-1').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/inside-out/img1.webp'},
            { url: '../img/inside-out/img2.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// Ein köstliches Versehen – Lightbox

$(document).ready(function()
{
    $('.exhibition-2').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/ein-koestliches-versehen/img1.webp'},
            { url: '../img/ein-koestliches-versehen/img2.webp'},
            { url: '../img/ein-koestliches-versehen/img3.webp'},
            { url: '../img/ein-koestliches-versehen/img4.webp'},
            { url: '../img/ein-koestliches-versehen/img5.webp'},
            { url: '../img/ein-koestliches-versehen/img6.webp'},
            { url: '../img/ein-koestliches-versehen/img7.webp'},
            { url: '../img/ein-koestliches-versehen/img8.webp'},
            { url: '../img/ein-koestliches-versehen/img9.webp'},
            { url: '../img/ein-koestliches-versehen/img10.webp'},
            { url: '../img/ein-koestliches-versehen/img11.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// An Apple A Day – Lightbox

$(document).ready(function()
{
    $('.exhibition-3').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/an-apple-a-day/img1.webp'},
            { url: '../img/an-apple-a-day/img2.webp'},
            { url: '../img/an-apple-a-day/img3.webp'},
            { url: '../img/an-apple-a-day/img4.webp'},
            { url: '../img/an-apple-a-day/img5.webp'},
            { url: '../img/an-apple-a-day/img6.webp'},
            { url: '../img/an-apple-a-day/img7.webp'},
            { url: '../img/an-apple-a-day/img8.webp'},
            { url: '../img/an-apple-a-day/img9.webp'},
            { url: '../img/an-apple-a-day/img10.webp'},
            { url: '../img/an-apple-a-day/duglas/img1.webp', caption: 'Edel Extra, Galerie Duglas (1)'},
            { url: '../img/an-apple-a-day/duglas/img2.webp', caption: 'Edel Extra, Galerie Duglas (2)'},
            { url: '../img/an-apple-a-day/duglas/img3.webp', caption: 'Edel Extra, Galerie Duglas (3)'},
            { url: '../img/an-apple-a-day/duglas/img4.webp', caption: 'Edel Extra, Galerie Duglas (4)'},
            { url: '../img/an-apple-a-day/duglas/img5.webp', caption: 'Edel Extra, Galerie Duglas (5)'},
            { url: '../img/an-apple-a-day/duglas/img6.webp', caption: 'Edel Extra, Galerie Duglas (6)'},
            { url: '../img/an-apple-a-day/duglas/img7.webp', caption: 'Edel Extra, Galerie Duglas (7)'},
            { url: '../img/an-apple-a-day/duglas/img8.webp', caption: 'Edel Extra, Galerie Duglas (8)',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});
