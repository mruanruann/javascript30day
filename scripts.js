/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  /*
  function togglePlay() {
    if(video.paused){
        video.play();
    }
    else 
        video.pause();
  }*/

//  function updateIcon(){
//      if(this.paused){
//          toggle.textContent = '►';
//          console.log("playing");
//      }
//      else
//          toggle.textContent = '❚ ❚';
//          console.log("paused");
//  }

 function updateIcon(){
     const icon = video.paused ? '►' : '❚ ❚';
     //console.log(video.paused);
     //console.log(this);
     toggle.textContent = icon;
 }

 function handleRangeUpdate() {
    //
    video[this.name] = this.value;
    console.log(this);
  }

/* Hook up the event listeners */
video.addEventListener('click', updateIcon);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

