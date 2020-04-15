; (function () {

  const player = document.querySelector('.player__video');
  const playBtnFon = document.querySelector('.player__fon-play');
  const playBtnFooter = document.querySelector('#player__icon-play');
  const pauseBtn = document.querySelector('#player__icon-pause');
  const playControl = document.querySelector('.player__playback');
  const moveController = document.querySelector('.player__move-controller');
  const fon = document.querySelector('.player__fon');
  const moveVolumePosition = document.querySelector('.player__volume-controller');
  const volumeControl = document.querySelector('.player__volume-control');
  let playDuration = player.duration;


  let onClick = function () {

    fon.style.display = 'none';
    if (player.paused) {
      pauseBtn.style.display = 'block';
      playBtnFooter.style.display = 'none';
      player.play();
    } else {
      pauseBtn.style.display = 'none';
      playBtnFooter.style.display = 'block';
      player.pause();
    }
  }


  const playMove = function () {
    let playPosition = player.currentTime;
    
    moveController.style.left = (playPosition / playDuration) * 97 + '%';
    // console.log(moveController.style.left)
  };

  
  const volumeMove = function () {
    let volumeNow = player.volume;
    moveVolumePosition.style.left = volumeNow * 80 + "%";
  }



  playBtnFon.addEventListener("click", onClick);

  playBtnFooter.addEventListener("click", onClick);

  pauseBtn.addEventListener("click", onClick);



  volumeControl.addEventListener('click', function (e) {
    const volumeTarget = e.currentTarget;
    const volumePosition = e.offsetX;
    let newVolumePosition = (volumePosition / volumeTarget.offsetWidth) * 80;

    moveVolumePosition.style.left = newVolumePosition + "%";

    player.volume = newVolumePosition / 80;
  });

 
  
  player.addEventListener('timeupdate', function () {
    playMove();
    volumeMove();
  }, false);



  player.addEventListener('ended', function () {
    fon.style.display = 'flex';
    player.currentTime = 0;
  });



  playControl.addEventListener('click', function (e) {
    const moveTarget = e.currentTarget;
    const movePosition = e.offsetX;
    let newMovePosition = (movePosition / moveTarget.offsetWidth) * 97;

    moveController.style.left = newMovePosition + "%";

    player.currentTime = newMovePosition / 97 * playDuration;
  });


  volumeMove();

})()
