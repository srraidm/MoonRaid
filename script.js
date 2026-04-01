const fakeVideo = document.querySelector('.fake-video');
const modal = document.getElementById('videoModal');
const closeModal = document.querySelector('.close-modal');
const videoContainer = document.querySelector('.video-container');

fakeVideo.addEventListener('click', function() {
    modal.classList.add('active');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/watch?v=zXUqNw0XHTc';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
});

closeModal.addEventListener('click', function() {
    modal.classList.remove('active');
    videoContainer.innerHTML = '';
});

modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
        videoContainer.innerHTML = '';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        videoContainer.innerHTML = '';
    }
});
