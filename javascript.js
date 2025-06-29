document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('landscapeVideo');
    const videoContainer = document.querySelector('.video-container');
    const sleepNowBtn = document.getElementById('sleepNow');
    const sleepLaterBtn = document.getElementById('sleepLater');

    function showVideo(src) {
        video.src = src;
        video.muted = false;
        video.volume = 1.00;
        videoContainer.classList.remove('hidden');
        video.play();
    }
    sleepNowBtn.addEventListener('click', function() {
        showVideo('snaptik_7472749513409596690.mp4');
    });
    sleepLaterBtn.addEventListener('click', function() {
        showVideo('snaptik_7402921242224774418.mp4');
    });
});