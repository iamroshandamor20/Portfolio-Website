// Example of rotating and highlighting different icons
const icons = document.querySelectorAll('.icon img');
const centerIcon = document.getElementById('highlight-icon');
let currentIndex = 0;

function rotateIcons() {
    // Highlight the current icon in the center
    centerIcon.src = icons[currentIndex].src;

    // Update index to rotate to the next icon
    currentIndex = (currentIndex + 1) % icons.length;
}

// Rotate the icons every 2 seconds
setInterval(rotateIcons, 2000);
