// Copyright
const copyright = document.querySelectorAll(".copyright");

copyright.forEach(copyright => {
    copyright.innerHTML = `Pharaz Azimi &copy; ${new Date().getFullYear()}. All rights reserved.`;
});

// Fresco Lightbox – Fallback Image Functionality (In Progress)

var setOnError = (document) => {
    var imgs = document.getElementsByClassName("fr-content-element");
    for(var c = 0; c < imgs.length; c++){
        var element = imgs.item(c);
        element.setAttribute("onerror", "javascript: updateImgSrc(this);");
    }
}

var updateImgSrc = function (img){
    var timestamp = new Date();
    img.src = img.src.substr(0, img.src.lastIndexOf('.')) + '.jpg';
    console.log(img.src);
}

// Exhibitions — Lightbox Functionality

/* I'm trying to prevent that annoying error, which prevents me from changing the default behavior of the event listener. 
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

// Works — Lightbox Functionality

// Tiramisu – Lightbox

$(document).ready(function()
{
    $('.works-1').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/ein-koestliches-versehen/img5.webp', caption: 'Besides being a sweet dessert, in Italian <em>TIRAMISU</em> means pick me up, or cheer me up!'},
            { url: '../img/ein-koestliches-versehen/img3.webp'},
            { url: '../img/ein-koestliches-versehen/img2.webp'},
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
        setOnError(document);
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
            { url: 'https://vimeo.com/433544643',
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
            { url: '../img/ot-workshop/img1.webp', caption: 'An orthopedic workshop was set up in order to produce and display products for solving the world&rsquo;s problems and fullfilling human needs. Some of my previous works—such as „Belvedere", „Things We Need to Repair the World", and „Die Weltkarte"—were used as inspiration for the workshop. <br> I decided to produce shoe inlays to help society walk better next to each other. I have used orthopedic techniques to manufacture medical insoles, which is why I created my own vacuum forming machine so that I would be able to form FP bond boards.'},
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
            { url: '../img/ot-workshop/img15.webp'},
            { url: ' https://vimeo.com/433961681',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// Things We Need to Repair the World – Lightbox 

$(document).ready(function()
{
    $('.works-4').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/repair-the-world/img1.webp', caption: 'This tool series is made of contrasting materials such as fragile ceramic, light rubber, or rough concrete. The tools have an ergonomic surface for the workers hand as if to simplify the utilization of them and a hole for proper hanging in the workshop. An ironic impression of the disability of finding a solution for human-made disasters and troubles is given since the tools are not comfortable to use.'},
            { url: '../img/repair-the-world/img2.webp'},
            { url: '../img/repair-the-world/img3.webp'},
            { url: '../img/repair-the-world/img4.webp'},
            { url: '../img/repair-the-world/img5.webp'},
            { url: '../img/repair-the-world/img6.webp'},
            { url: '../img/repair-the-world/img7.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// A Chair for Architekten – Lightbox 

$(document).ready(function()
{
    $('.works-5').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/a-chair-for-architekten/img1.webp', caption: 'A chair made from 13 pieces of old bubble levels, providing accuracy in various positions. It constantly measures the ground surface of the person sitting on it.'},
            { url: '../img/a-chair-for-architekten/img2.webp'},
            { url: '../img/a-chair-for-architekten/img3.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// Becoming a Non-Executive Chair – Lightbox

$(document).ready(function()
{
    $('.works-6').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/non-executive-chair/img1.webp'},
            { url: '../img/non-executive-chair/img2.webp'},
            { url: '../img/non-executive-chair/img3.webp'},
            { url: '../img/non-executive-chair/img4.webp'},
            { url: '../img/non-executive-chair/img5.webp'},
            { url: '../img/non-executive-chair/img6.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// Zack, Zack! – Lightbox 

$(document).ready(function()
{
    $('.works-7').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/zack-zack/img1.webp'},
            { url: '../img/zack-zack/img2.webp'},
            { url: '../img/zack-zack/img3.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// Too Early to Be Asleep Yet – Lightbox 

$(document).ready(function()
{
    $('.works-8').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/too-early-to-be-asleep/img1.webp'},
            { url: '../img/too-early-to-be-asleep/img2.webp'},
            { url: '../img/too-early-to-be-asleep/img3.webp'},
            { url: '../img/too-early-to-be-asleep/img4.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// Eternal Eternal – Lightbox

$(document).ready(function()
{
    $('.works-9').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/eternal-eternal/img1.webp'},
            { url: '../img/eternal-eternal/img2.webp'},
            { url: '../img/eternal-eternal/img3.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});

// Hazardous – Lightbox 

$(document).ready(function()
{
    $('.works-10').on('click', function(event)
    {
        // The page will scroll up without this
        event.preventDefault();

        Fresco.show([
            { url: '../img/hazardous/img1.webp',
                options: {
                    thumbnails: false,
                    loop: true
                }
            }
        ]);
    });
});
