document.addEventListener('DOMContentLoaded', function() {
    const videoOverlay = document.getElementById('video-overlay');
    const introVideo = document.getElementById('intro-video');

    if (window.innerWidth < 768) {
        videoOverlay.style.display = 'none';
    } else {
        videoOverlay.style.display = 'block';
        introVideo.addEventListener('ended', function() {
            videoOverlay.style.display = 'none';
        });
    }
});