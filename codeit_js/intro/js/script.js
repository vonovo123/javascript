 // 여기에 코드를 입력하세요.
      var loopSound = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/loop.mp3');
      var sound01 = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/01_kick_drum.wav');
      var sound02 = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/02_closed_hihat.wav');
      var sound03 = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/03_open_hihat.wav');
      var sound04 = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/04_clap.wav');
      var sound05 = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/05_snap.wav');
      var sound06 = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/06_crash.wav');
      var sound07 = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/07_tom1.wav');
      var sound08 = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/08_tom2.wav');
      var sound09 = new Audio('C:/Users/USER/Desktop/개발/codeit_js/intro/audio/09_tambourine.wav');

      $('#play-btn').on('click', playAudio);
      
      $('#stop-btn').on('click', stopAudio);

      function playAudio(){
      	loopSound.play();
      }
      
      function stopAudio(){
      	loopSound.pause();
      }

      //드럼소리 켜기
      function playDrumSounds(keyNum){
        switch(keyNum){
          case '1':
          sound01.play();
          break;
          case '2':
          sound02.play();
          break;
          case '3':
          sound03.play();
          break;
          case '4':
          sound04.play();
          break;
          case '5':
          sound05.play();
          break;
          case '6':
          sound06.play();
          break;
          case '7':
          sound07.play();
          break;
          case '8':
          sound08.play();
          break;
          case '9':
          sound09.play();
          break;
           
        }
      }

      function pauseDrumSounds(keyNum){
        switch(keyNum){
          case '1':
          sound01.pause();
          sound01.currentTime = 0;
          break;
          case '2':
          sound02.pause();
          sound02.currentTime = 0;
          break;
          case '3':
          sound03.pause();
          sound03.currentTime = 0;
          break;
          case '4':
          sound04.pause();
          sound04.currentTime = 0;
          break;
          case '5':
          sound05.pause();
          sound05.currentTime = 0;
          break;
          case '6':
          sound06.pause();
          sound06.currentTime = 0;
          break;
          case '7':
          sound07.pause();
          sound07.currentTime = 0;
          break;
          case '8':
          sound08.pause();
          sound08.currentTime = 0;
          break;
          case '9':
          sound09.pause();
          sound09.currentTime = 0;
          break;
           
        }

      }

      $(document).on('keydown', insertPlayingClass);
      $(document).on('keyup', removePlayingClass);
      
      function insertPlayingClass(event){
      	var key = event['key'];
      	var keyAbleArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
      	if(key in keyAbleArray){ 
      	var id = '#cell' + key;
      	var cell = $(id);
      	cell.addClass('playing');
        playDrumSounds(key);
      }
      }

      function removePlayingClass(event){
      	var key = event['key'];
        var keyAbleArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        if(key in keyAbleArray){
      	var id = '#cell' + key;
      	var cell = $(id);
      	cell.removeClass('playing');
        pauseDrumSounds(key);
      }
      }