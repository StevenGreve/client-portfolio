/* Will pause and play the mp3 file.
------------------------------------*/
const audioElement = document.getElementById("audio");
document.getElementById("play").addEventListener("click", function(){
    if (audioElement.paused) {
        audioElement.play();
    }
    else{
        audioElement.pause();
    }
});
