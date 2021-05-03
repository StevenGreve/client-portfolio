// Copyright
const copyright = document.querySelectorAll(".copyright");

copyright.forEach(copyright => {
    copyright.innerHTML = `Pharaz Azimi &copy; ${new Date().getFullYear()}. All rights reserved.`;
});

// Change the color of the text from the copyright class for the fourth slide at the mouseover event.
function changeColor()
{
    copyright.forEach(copyright => {
        copyright.style.color = "#000";
    });
}

function defaultColor()
{
    copyright.forEach(copyright => {
            copyright.style.color = "#fff";
    });
}
