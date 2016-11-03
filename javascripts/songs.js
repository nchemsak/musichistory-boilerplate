'use strict';
var songs = [];
var output = document.getElementsByClassName("songs");

// console.log("output: ", output);
// songs[songs.length] = "Grand Canyon > by Puscifer on the album Money Shot"
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs[songs.length] = "Passenger > by Deftones on the album White Pony";

document.getElementById("addButton").addEventListener("click", addMusic);

function addMusic() {
  var userInput = {
    title: document.getElementsByClassName("addForm")[0].value,
    artist: document.getElementsByClassName("addForm")[1].value,
    album: document.getElementsByClassName("addForm")[2].value
  };
  songs.push(userInput);

  var songTitle = document.createElement("h4");
  songTitle.setAttribute("class", "songchoices");

  var artistName = document.createElement("li");
  artistName.setAttribute("class", "stuff");

  var albumName = document.createElement("li");
  albumName.setAttribute("class", "stuff");

  console.log("songs: ", songs);
  // console.log("songs[0].title: ", songs[0].title);

  var title = document.createTextNode(userInput.title);
  var artist = document.createTextNode(userInput.artist);
  var album = document.createTextNode(userInput.album);

  songTitle.appendChild(title);
  artistName.appendChild(artist);
  albumName.appendChild(album);

  // document.body.appendChild(artistName);
  document.getElementById("songs").appendChild(songTitle);
  document.getElementById("songs").appendChild(artistName);
  document.getElementById("songs").appendChild(albumName);

  for (var property in userInput) {
    // console.log(property + " = " + userInput[property]);
    // console.log(property, userInput[property]);
    output.innerHTML = userInput[property];
  }
}

var result = songs.map(function(song) {
  return song
});
