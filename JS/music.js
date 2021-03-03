// ---- MUSIC ----

const sounds = ["applause","birds-singing","crowd-laugh","game-suspense","light-rain","light-bird","rain-and-thunder","sweep-transition","woosh-wind"];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('music-btn');
    btn.innerText = sound;

    document.getElementById('music-buttons').appendChild(btn);

    btn.addEventListener('click',() => {
        stopSounds();
        document.getElementById(sound).play();
    })
})

function stopSounds(){
   sounds.forEach(sound => {
       const song = document.getElementById(sound);
       song.pause();
       song.currentTime=0;
   })
}