console.log('JavaScript Console Connected.');
// Declare variables
const playBtn = document.querySelector('#playButton'),
    refreshBtn = document.querySelector('#refreshButton'),
    volumeLevel = document.querySelector('#volumeControl'),
    // Define audio variables as constants
    bassLoop = document.querySelector('#bassLoop'),
    bassLoopTwo = document.querySelector('#bassLoopTwo'),
    drums = document.querySelector('#drums'),
    guitarLoop = document.querySelector('#guitarLoop'),
    melodyLoop = document.querySelector('#melodyLoop'),
    piano = document.querySelector('#piano');

let dropZones = document.querySelectorAll('.dropZone'),
    audioFiles = document.querySelectorAll('.instrument_img'),
    sounds = document.querySelectorAll('#audios audio'),
    draggedPiece;

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
function playAudios () {
    sounds.forEach(sound => {
    sound.currentTime = 0;
    sound.play();
    });
}

function volumeControl () {
    sounds.forEach(sound => sound.volume = (this.value / 100));
}
// Volume Slider event listener
volumeLevel.addEventListener('change', volumeControl);
// Drop zone events
audioFiles.forEach(audio => audio.addEventListener('dragstart', dragStart));
dropZones.forEach(zone => zone.addEventListener('dragover', dragOver));
dropZones.forEach(zone => zone.addEventListener('drop', dropEnd));