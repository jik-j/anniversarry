// JavaScript to handle background music play/pause on scroll
let isPlaying = false;
let musicStarted = false;  // To check if music has started
const audio = new Audio('background_music.mp3');

// Function to play or pause music
function toggleMusic() {
    if (!isPlaying) {
        audio.pause();
        document.getElementById('play-music').textContent = 'Play Music';
    } else {
        audio.play();
        document.getElementById('play-music').textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
}

// Function to automatically start the music on first scroll
function startMusicOnScroll() {
    if (!musicStarted) {
        audio.play();
        document.getElementById('play-music').textContent = 'Pause Music';
        isPlaying = true;
        musicStarted = true;  // Ensure the music only starts once on first scroll
    }
}

// Scroll animation that triggers on both up and down scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');

    // Start music when the user first scrolls
    startMusicOnScroll();

    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        // Trigger animation if section is in view when scrolling down or up
        if (position < screenPosition && position > -screenPosition) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');  // Reset animation when out of view
        }
    });
});

