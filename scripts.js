// Edit this file
const player = document.querySelector('.player');
const video = player.querySelector('.viewer'); //video
const progress = player.querySelector('.progress'); //outer div
const progressBar = player.querySelector('.progress__filled'); //div inside progress div
const toggle = player.querySelector('.toggle'); //play-pause button
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider'); //volume and play backspeed
/*
You have to create a custom video player which will be showing-
 #a custom progress bar, -->done
 #a custom play/pause button, -->done
 #volume controller bar, -->done
 #playback speed controller bar and --->done
 #skip buttons present in main.html. -->done

You only need to add code to the scripts.js file. Implement all the features specified in main.html file.

Use ► and ❚ ❚ characters for play and pause.

You need to add logic for:

progress__filled element to represent the progress of the video.
player__buttton toggle to toggle between play and pause
volume input element is to set volume of the video
playbackSpeed input element to set the playback speed of the video
« 10s button to go 10 seconds back
25s » button to skip 25 seconds
*/


// #a custom play/pause button
toggle.addEventListener("click",()=>{
    if(video.paused){
        video.play()
        toggle.innerHTML = "❚ ❚"
    }else{
        video.pause()
        toggle.innerHTML=  "►"
    }
})


// #a custom progress bar, 
video.addEventListener("timeupdate",e => {
    let { currentTime, duration } = e.target //get current time and duration
    let percent = (currentTime / duration) * 100
    progressBar.style.flexBasis = `${percent}%`
})

// #playback speed controller bar
skipButtons[0].addEventListener("click",()=>{
    video.currentTime -= 10 //substract 10se from curren time
})
skipButtons[1].addEventListener("click",()=>{
    video.currentTime += 25 //to forward 25sec
})


//volume control
ranges[0].addEventListener("input",(e)=>{
    video.volume = e.target.value
})

//playback speed control bar
ranges[1].addEventListener("input",(e)=>{
    video.playbackRate = e.target.value
})