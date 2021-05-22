// Copyright
const copyright = document.querySelectorAll(".copyright");

copyright.forEach(copyright => {
    copyright.innerHTML = `Pharaz Azimi &copy; ${new Date().getFullYear()}. All rights reserved.`;
});

// Exhibition — Fresco Lightbox

/* I'n trying to prevent the annoying error that prevents me from changing the default behavior of the event listener. 
   Error message: [Intervention] Unable to preventDefault inside passive event listener due to target being treated 
   as passive. 
   Source: https://github.com/inuyaksa/jquery.nicescroll/issues/799 
   Status: The attempted fix does not appear to work. 
   ------------------------------------------------------------------------------------------------------------------- */

document.addEventListener('touchstart', function(){}, {passive: false})

// inside:OUT – Lightbox

$(document).ready(function()
{
    $('.exhibition-1').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/inside-out/thumbnail.webp'},
            { url: '../img/inside-out/img1.webp'},
            { url: '../img/inside-out/img2.webp',
                options: {
                    thumbnails: false
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
            { url: '../img/ein-koestliches-versehen/thumbnail.webp'},
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
                    thumbnails: false
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
            { url: '../img/an-apple-a-day/thumbnail.webp'},
            { url: '../img/an-apple-a-day/img1.webp'},
            { url: '../img/an-apple-a-day/img2.webp'},
            { url: '../img/an-apple-a-day/img3.webp'},
            { url: '../img/an-apple-a-day/img4.webp'},
            { url: '../img/an-apple-a-day/img5.webp'},
            { url: '../img/an-apple-a-day/img6.webp'},
            { url: '../img/an-apple-a-day/img7.webp'},
            { url: '../img/an-apple-a-day/img8.webp'},
            { url: '../img/an-apple-a-day/img9.webp'},
            { url: '../img/an-apple-a-day/img10.webp',
                options: {
                    thumbnails: false
                }
            }
        ]);
    });
});
