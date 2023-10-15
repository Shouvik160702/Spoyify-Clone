console.log("welcome to Spotify");

// initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let MasterPlay=document.getElementById('MasterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"let me love you",filepath: "songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"Salaam-e-Ishq",filepath: "songs/2.mp3", coverpath:"covers/2.jpg"},
    {songName:"Despacito",filepath: "songs/3.mp3", coverpath:"covers/3.jpg"},
    {songName:"daddy mummy",filepath: "songs/4.mp3", coverpath:"covers/4.jpg"},
    {songName:"one bottle down",filepath: "songs/5.mp3", coverpath:"covers/5.jpg"},
    {songName:"Call Aundi",filepath: "songs/6.mp3", coverpath:"covers/6.jpg"},
    {songName:"bang bang",filepath: "songs/7.mp3", coverpath:"covers/7.jpg"},
]


songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// handle ply/pause click
MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused  || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-pause-circle');
        MasterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    //  Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src ='songs/$(songIndex+1).mp3';
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementsById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex += 1; 
    }
    audioElement.src ='songs/$(songIndex+1).mp3';
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
})


document.getElementsById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex = 0;
    }
    else{
        songIndex -= 1; 
    }
    audioElement.src ='songs/$(songIndex+1).mp3';
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
})