document.addEventListener("DOMContentLoaded", () => {

  const video = document.querySelector("video");
  const playButton = document.querySelector(".play-button");
  const muteBtn = document.querySelector('.mute-btn');

  muteBtn.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      muteBtn.innerHTML = '<img src="./image/sound.png" alt="Mute">';
    } else {
      video.muted = true;
      muteBtn.innerHTML = '<img src="./image/sound-off.png" alt="Mute">';
    }
  });

  playButton.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playButton.style.display = "none";
    } else {
      video.pause();
      playButton.style.display = "block";
    }
  });

  video.addEventListener('click', () => {
    video.pause();
    playButton.style.display = "block";
  });

  const procent = document.querySelector('.advantages__procent span');
  const procentText = document.querySelector('.advantages__bottom');
  const speed = document.querySelector('.speed div');
  procent.innerHTML = 0;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        speed.classList.add('animation');
        const timer = setInterval(() => {
          procent.innerHTML++;
          if (procent.innerHTML == 15) {
            clearInterval(timer);
          }
        }, 180);
        observer.disconnect();
      }
    });
  });

  observer.observe(procentText);
});

