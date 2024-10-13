const video = document.getElementById('intro-video');
const overlay = document.getElementById('video-overlay');
const content = document.getElementById('content');

video.addEventListener('ended', () => {
    overlay.style.display = 'none';
    content.style.display = 'block';
});