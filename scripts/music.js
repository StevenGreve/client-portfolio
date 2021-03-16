/* Will pause and play the mp3 file.
------------------------------------ */
const audioElement = document.querySelectorAll("#audio");
const playElement = document.querySelectorAll("#play");

audioElement.forEach(audioElement => {
    for(let i = 0; i < playElement.length; i++){
        playElement[i].addEventListener("click", function(){
            if (audioElement.paused){
                audioElement.play();
            }
            else{
                audioElement.pause();
            }
        })
    }
});
