console.log('JavaScript Console Connected.');
// Declare variables
const playBtn = document.querySelector('#playButton'),
    refreshBtn = document.querySelector('#refreshButton'),
    volumeLevel = document.querySelector('#volumeControl');

let dropZones = document.querySelectorAll('.dropZone'),
    audios = document.querySelectorAll('#audio-con img'),
    zoneTaken,
    draggedPiece,
    loops = document.querySelectorAll('#audios audio');

// Functions 
function dragStart() {
        draggedPiece = this;
        console.log ('User has started to drag ', this.id);
}
function dragOver(e) {
        e.preventDefault();
        console.log('User has dragged ', this.id);
}
function dropEnd(e) {
    e.preventDefault();
    console.log('User has dropped ', draggedPiece.id, ' in ', this.id);
    // Check if zone is taken, if not, append child
    if (this.childElementCount === 0) {
        this.appendChild(draggedPiece);
        playAudios(draggedPiece.id, this);
    }
    // State error if zone is taken
    else {
        console.log('Error! This drop zone is taken!');
    }
}
function volumeControl () {
    loops.forEach(loop => loop.volume = (this.value / 100));
}
function playAudios () {
    loops.forEach(loop => {
    loop.pause();
    loop.currentTime = 0;
    loop.play();
    });
}
// Volume Slider event listener
volumeLevel.addEventListener('change', volumeControl);
// Drop zone events
audios.forEach(audio => audio.addEventListener('dragstart', dragStart));
dropZones.forEach(zone => zone.addEventListener('dragover', dragOver));
dropZones.forEach(zone => zone.addEventListener('drop', dropEnd));