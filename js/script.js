// Complete Day 1 goals here

// styles
let monkey = document.querySelector('.monkey');
let tuffGuy = document.querySelector('.tuff-guy');
let cutesie = document.querySelector('.cutesie');

let shrink = document.querySelector('.shrink');
let grande = document.querySelector('.grande');
let currentSize = 100;

let images = document.querySelector('.images');
let songs = document.querySelector('.songs');
let artists = document.querySelector('.artists');
let long = document.querySelector('.length');
let link = document.querySelector('.link');
let playName = document.querySelector('.play-name');
let titleInput = document.querySelector('.title-input');

// songs
let diffSongs1 = ['Life Less Ordinary', 'If We Being Real', 'Summertime'];
let diffSongs2 = ['California Sun', 'The Box', 'Across the Universe'];
let diffSongs3 = ['The Friendship Song', 'Doot Doot (6 7)', 'impossible'];

// album covers
let diffAlbums1 = ['photos/george2.png', 'photos/tuff.png', 'photos/cutesie.jpg'];
let diffAlbums2 = ['photos/george2.png', 'photos/tuff.png', 'photos/cutesie.jpg'];
let diffAlbums3 = ['photos/george2.png', 'photos/tuff.png', 'photos/cutesie.jpg'];

// artists
let diffArtists = ['Carbon Leaf', 'Yeat', 'The Sundays'];
let diffArtists2 = ['Brian Wilson', 'Roddy Ricch', 'Fiona Apple'];
let diffArtists3 = ['Carbon Leaf', 'Skrilla', 'Wasia Project'];

// durations
let diffDur = ['3:35', '2:52', '3:34'];
let diffDur2 = ['3:05', '3:16', '5:07'];
let diffDur3 = ['2:33', '2:30', '4:30'];

// music
let summertime = new Audio('audio/01 Summertime.mp3');
let universe = new Audio('audio/Across the Universe.mp3');
let california = new Audio('audio/California Sun (Bonus Track).mp3');
let beingReal = new Audio('audio/If We Being Real [Official Audio].mp3');
let lessOrdinary = new Audio('audio/Life Less Ordinary.mp3');
let boxRicch = new Audio('audio/Roddy Ricch - The Box [Official Audio].mp3');
let dootSever = new Audio('audio/Skrilla - Doot Doot (Official Audio).mp3');
let friendshipSong = new Audio('audio/The Friendship Song.mp3');
let wasiaImp = new Audio('audio/Wasia Project - impossible (Official Audio).mp3');

// play / pause variables
let currentSong = null;
let isPlaying = false;

// this connects song titles to the actual audio files
let songMap = {
  'Life Less Ordinary': lessOrdinary,
  'If We Being Real': beingReal,
  'Summertime': summertime,
  'California Sun': california,
  'The Box': boxRicch,
  'Across the Universe': universe,
  'The Friendship Song': friendshipSong,
  'Doot Doot (6 7)': dootSever,
  'impossible': wasiaImp
};

// play / pause button
document.getElementById('go1').addEventListener('click', function () {
    let selectedSong = document.getElementById('song-title').innerHTML; //selectedSong is whatever it says in the text on the page
    let songToPlay = songMap[selectedSong]; //songToPlay is whatever it says in the text on the page

    if (!songToPlay) {
      return;
    } //if inverse of songToPLay then return.

    // If the same song is currently playing, pause it
      if (currentSong === songToPlay && isPlaying === true) {
        currentSong.pause();
        isPlaying = false;
        document.getElementById('go1').src = 'photos/play.png';
        return;
      }

      // If the same song is paused, resume it from the same spot
      if (currentSong === songToPlay && isPlaying === false) {
        currentSong.play();
        isPlaying = true;
        document.getElementById('go1').src = 'photos/pause.png';
        return;
      }

      // If a different song was already selected, stop and reset that old song
      if (currentSong !== null) {
        currentSong.pause();
        currentSong.currentTime = 0;
      }

    // Play the newly selected song
    currentSong = songToPlay;
    currentSong.play();
    isPlaying = true;
    document.getElementById('go1').src = 'photos/pause.png';
});


document.getElementById('go2').addEventListener('click', function () {
    let selectedSong = document.getElementById('song2-title').innerHTML; //selectedSong is whatever it says in the text on the page
    let songToPlay = songMap[selectedSong]; //songToPlay is whatever it says in the text on the page

    if (!songToPlay) {
      return;
    } //if inverse of songToPLay then return.

    // If the same song is currently playing, pause it
      if (currentSong === songToPlay && isPlaying === true) {
        currentSong.pause();
        isPlaying = false;
        document.getElementById('go2').src = 'photos/play.png';
        return;
      }

      // If the same song is paused, resume it from the same spot
      if (currentSong === songToPlay && isPlaying === false) {
        currentSong.play();
        isPlaying = true;
        document.getElementById('go2').src = 'photos/pause.png';
        return;
      }

      // If a different song was already selected, stop and reset that old song
      if (currentSong !== null) {
        currentSong.pause();
        currentSong.currentTime = 0;
      }

    // Play the newly selected song
    currentSong = songToPlay;
    currentSong.play();
    isPlaying = true;
    document.getElementById('go2').src = 'photos/pause.png';
});


document.getElementById('go3').addEventListener('click', function () {
    let selectedSong = document.getElementById('song3-title').innerHTML; //selectedSong is whatever it says in the text on the page
    let songToPlay = songMap[selectedSong]; //songToPlay is whatever it says in the text on the page

    if (!songToPlay) {
      return;
    } //if inverse of songToPLay then return.

    // If the same song is currently playing, pause it
      if (currentSong === songToPlay && isPlaying === true) {
        currentSong.pause();
        isPlaying = false;
        document.getElementById('go3').src = 'photos/play.png';
        return;
      }

      // If the same song is paused, resume it from the same spot
      if (currentSong === songToPlay && isPlaying === false) {
        currentSong.play();
        isPlaying = true;
        document.getElementById('go3').src = 'photos/pause.png';
        return;
      }

      // If a different song was already selected, stop and reset that old song
      if (currentSong !== null) {
        currentSong.pause();
        currentSong.currentTime = 0;
      }

    // Play the newly selected song
    currentSong = songToPlay;
    currentSong.play();
    isPlaying = true;
    document.getElementById('go3').src = 'photos/pause.png';
});

// styles clicked
monkey.addEventListener('click', function () {
  playName.innerHTML = 'monkey mode';

  document.getElementById('song-title').innerHTML = diffSongs1[0];
  document.getElementById('song2-title').innerHTML = diffSongs2[0];
  document.getElementById('song3-title').innerHTML = diffSongs3[0];

  document.getElementById('album-image').src = diffAlbums1[0];
  document.getElementById('album2-image').src = diffAlbums2[0];
  document.getElementById('album3-image').src = diffAlbums3[0];

  document.getElementById('audio-artists').innerHTML = diffArtists[0];
  document.getElementById('audio2-artists').innerHTML = diffArtists2[0];
  document.getElementById('audio3-artists').innerHTML = diffArtists3[0];

  document.getElementById('how-long').innerHTML = diffDur[0];
  document.getElementById('how2-long').innerHTML = diffDur2[0];
  document.getElementById('how3-long').innerHTML = diffDur3[0];

  document.getElementById('go1').src = 'photos/play.png';
  isPlaying = false;
});

tuffGuy.addEventListener('click', function () {
  playName.innerHTML = 'im sooo tuff';

  document.getElementById('song-title').innerHTML = diffSongs1[1];
  document.getElementById('song2-title').innerHTML = diffSongs2[1];
  document.getElementById('song3-title').innerHTML = diffSongs3[1];

  document.getElementById('album-image').src = diffAlbums1[1];
  document.getElementById('album2-image').src = diffAlbums2[1];
  document.getElementById('album3-image').src = diffAlbums3[1];

  document.getElementById('audio-artists').innerHTML = diffArtists[1];
  document.getElementById('audio2-artists').innerHTML = diffArtists2[1];
  document.getElementById('audio3-artists').innerHTML = diffArtists3[1];

  document.getElementById('how-long').innerHTML = diffDur[1];
  document.getElementById('how2-long').innerHTML = diffDur2[1];
  document.getElementById('how3-long').innerHTML = diffDur3[1];

  document.getElementById('go1').src = 'photos/play.png';
  isPlaying = false;
});

cutesie.addEventListener('click', function () {
  playName.innerHTML = 'feeling cutesie';

  document.getElementById('song-title').innerHTML = diffSongs1[2];
  document.getElementById('song2-title').innerHTML = diffSongs2[2];
  document.getElementById('song3-title').innerHTML = diffSongs3[2];

  document.getElementById('album-image').src = diffAlbums1[2];
  document.getElementById('album2-image').src = diffAlbums2[2];
  document.getElementById('album3-image').src = diffAlbums3[2];

  document.getElementById('audio-artists').innerHTML = diffArtists[2];
  document.getElementById('audio2-artists').innerHTML = diffArtists2[2];
  document.getElementById('audio3-artists').innerHTML = diffArtists3[2];

  document.getElementById('how-long').innerHTML = diffDur[2];
  document.getElementById('how2-long').innerHTML = diffDur2[2];
  document.getElementById('how3-long').innerHTML = diffDur3[2];

  document.getElementById('go1').src = 'photos/play.png';
  isPlaying = false;
});

// title double click
titleInput.addEventListener('dblclick', () => {
  if (titleInput.querySelector('input')) return;

  let putIn = document.createElement('input');
  putIn.value = playName.textContent;
  playName.textContent = '';

  putIn.style.color = 'black';
  putIn.style.fontSize = '44px';

  titleInput.appendChild(putIn);
  putIn.focus();
  putIn.select();

  function saveChanges() {
    const newValue = putIn.value.trim();
    playName.textContent = newValue || 'Empty text';
    putIn.remove();
  }

  putIn.addEventListener('blur', saveChanges);

  putIn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      saveChanges();
    }
  });
});

// ZOOOOOOOOM
shrink.addEventListener('click', () => {
  currentSize = currentSize - 10;

  if (currentSize >= 60) {
    document.querySelector('body').style.zoom = currentSize + '%';
  }
});

grande.addEventListener('click', () => {
  currentSize = currentSize + 10;

  if (currentSize <= 170) {
    document.querySelector('body').style.zoom = currentSize + '%';
  }
});

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /*
  this function empties the divs each time the button is
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see
  what happens without it!
  */
  $('.songs').empty();
  $('.images').empty();
  $('.artists').empty();
  $('.lengths').empty();
  $('.links').empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$('#add').click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();