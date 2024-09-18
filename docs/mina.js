const playlist = [
    'sounds/spotifydown.com - Tokyo Tuesday.mp3',
    'sounds/spotifydown.com - Foster In Mind.mp3',
    'sounds/spotifydown.com - Floating jazz.mp3',
    'sounds/spotifydown.com - Hotel Tropicana.mp3',
    'sounds/spotifydown.com - Kind of Blues.mp3',
    'sounds/spotifydown.com - Runaway Lofi.mp3'
];

let index = 0;  // song index frfr
let isPlaying = false;  // check playing audio frfr
const audioPlayer = document.getElementById('audioPlayer');
const toggleAudioButton = document.getElementById('audioToggler');

// load song frfr only once tho
function loadSong() 
{
    audioPlayer.src = playlist[index];
}

// play/pause ahhh function
function playSong() 
{
    audioPlayer.play();
    isPlaying = true;
    toggleAudioButton.innerText = 'Pause music';
}

// pause and play without starting over frfr
function pauseAudio() 
{
    audioPlayer.pause();
    isPlaying = false;
    toggleAudioButton.innerText = 'Play music';
}

// play/pause button
toggleAudioButton.addEventListener
(
    'click', function() 
    {
        if (isPlaying) 
        {
            pauseAudio();
        } 
        else 
        {
        if (audioPlayer.src === '')
        {
            loadSong();  // load song if no song is loaded frfr
        }
        playSong();
        }
    }
);

// Event listener for when the current song ends
audioPlayer.addEventListener ('ended', function() 
{
    index = (index + 1) % playlist.length;  // "thank you, next" ahhh line
    loadSong();
    playSong();
}
);