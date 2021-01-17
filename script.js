const slider = document.getElementById("progressBar");
const progress = document.getElementById("progress");
const button = document.getElementById("myButton");


var widthBar = parseInt(window.getComputedStyle(progress).width);
var widthProgress = parseInt(window.getComputedStyle(slider).width);
var result = Math.round((widthBar/widthProgress)*100);

function move(){
    setInterval(addFrame, 100);
    function addFrame(){
        if(result < 100){
            result = result + 5;
            progress.style.width = result + "%";
            progress.innerHTML = result + "%";
        }else if(result == 100){
            alert("Loading Complete");
        }
    }
}

button.addEventListener('click', () => {
    move(); 
})