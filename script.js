console.log("welcome to itunes");

//variables
let songIndex = 0;
let audioElement = new Audio ('songs/aa.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songListPlay = document.getElementsByClassName('songListPlay');

let songs = [
    {songsName: "Aankhomein mein teri", filePath: "songs/aa.mp3", coverPath: "covers/aa.jpg"},
    {songsName: "Apna Bna Le", filePath: "songs/ap.mp3.mp3", coverPath: "covers/ap.jpg"},
    {songsName: "Ram Siya Ram", filePath: "songs/ram.mp3.mp3", coverPath: "covers/ram.jpg"},
    {songsName: "Tum jo aye", filePath: "songs/tu.mp3", coverPath: "covers/tu.jpg"},
    {songsName: "Ye tune kya kiya", filePath: "songs/ye.mp3", coverPath: "covers/ye.jpg"},
]

function makeAllPlay(e, audioElement){
    if(audioElement.paused  ){
        index = parseInt(e.target.id);
        console.log(index);
        audioElement.src = "songs/"+ index +".mp3";
        audioElement.play();
        var url = "icons/pause.png";
        masterPlay.src = url;
        gif.style.opacity = 1;
        e.target.src = url;
    }
    else{
        audioElement.pause();
        var url = "icons/play.png";
        masterPlay.src = url;
         gif.style.opacity = 0;
         e.target.src = url;
    }
}


//plat/pause click
masterPlay.addEventListener('click', function makeAllPlays(){
   if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        var url = "icons/pause.png";
        masterPlay.src = url;
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        var url = "icons/play.png";
        masterPlay.src = url;
         gif.style.opacity = 0;

    }
})

//Listen To events
audioElement.addEventListener('timeupdate', ()=>{
    //update seeker
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

Array.from(songListPlay).forEach((element)=> {
    element.addEventListener('click',(e)=>{
        console.log(e.target);
       // audioElement.currentTime = 0;
        makeAllPlay(e, audioElement);
    })
});