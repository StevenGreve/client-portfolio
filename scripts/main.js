// Copyright
const copyright = document.querySelectorAll(".copyright");

copyright.forEach(copyright => {
    copyright.innerHTML = `Pharaz Azimi &copy; ${new Date().getFullYear()}. All rights reserved.`;
});

// Exhibition — Lightboxes

/* I'n trying to prevent that annoying error, which prevents me from changing the default behavior of the event listener. 
   Error message: [Intervention] Unable to preventDefault inside passive event listener due to target being treated as 
   passive. 
   Source: https://github.com/inuyaksa/jquery.nicescroll/issues/799 
   Status: The attempted fix does not appear to work. 
   ---------------------------------------------------------------------------------------------------------------------- */

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

// Works — Lightboxes

// Tiramisu – Lightbox

$(document).ready(function()
{
    $('.works-1').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/ein-koestliches-versehen/img5.webp'},
            { url: '../img/ein-koestliches-versehen/img3.webp'},
            { url: '../img/ein-koestliches-versehen/img2.webp'},
            { url: '../img/ein-koestliches-versehen/img6.webp'},
            { url: '../img/tiramisu/img1.webp'},
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

// Sometimes I'm in Control, Sometimes I'm Not – Lightbox

$(document).ready(function()
{
    $('.works-2').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/sometimes-im-in-control/img1.webp', caption: 'A 55 minute performance in public space of the underground line U55 at Berlin&rsquo;s main station (Hauptbahnhof) – making sure everything is under control!'},
            { url: '../img/sometimes-im-in-control/img2.webp'},
            { url: 'https://vimeo.com/433961681',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// OT Workshop – Lightbox 

$(document).ready(function()
{
    $('.works-3').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/ot-workshop/img1.webp', caption: ''},
            { url: '../img/ot-workshop/img2.webp'},
            { url: '../img/ot-workshop/img3.webp'},
            { url: '../img/ot-workshop/img4.webp'},
            { url: '../img/ot-workshop/img5.webp'},
            { url: '../img/ot-workshop/img6.webp'},
            { url: '../img/ot-workshop/img7.webp'},
            { url: '../img/ot-workshop/img8.webp'},
            { url: '../img/ot-workshop/img9.webp'},
            { url: '../img/ot-workshop/img10.webp'},
            { url: '../img/ot-workshop/img11.webp'},
            { url: '../img/ot-workshop/img12.webp'},
            { url: '../img/ot-workshop/img13.webp'},
            { url: '../img/ot-workshop/img14.webp'},
            { url: '../img/ot-workshop/img15.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});
