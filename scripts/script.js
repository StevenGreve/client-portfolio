// Copyright
const copyright = document.querySelectorAll(".copyright");

copyright.forEach(copyright => {
    copyright.innerHTML = `Pharaz Azimi &copy; ${new Date().getFullYear()}. All rights reserved.`;
    copyright.style.color = "#fff";
});

// SlipHover effect 
$(function(){
    $(".second-image-container").sliphover({
        fontColor: "#fff",
        reverse: false
    });
});
