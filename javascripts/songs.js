'use strict';
var songs = [];

// songs[songs.length] = "Grand Canyon > by Puscifer on the album Money Shot"
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs[songs.length] = "Passenger > by Deftones on the album White Pony";

// songs.forEach(function(item) {
//   var newer = item.replace('>', '-');
//   console.log( newer);
// });


document.getElementById("addButton").addEventListener("click", addMusic);
function addMusic() {
  var userInput = {
    title: document.getElementsByClassName("addForm")[0].value,
    artist: document.getElementsByClassName("addForm")[1].value,
    album: document.getElementsByClassName("addForm")[2].value
  };
  songs.push(userInput);
console.log("songs: ", songs);
  console.log("userInput: ", userInput);

}


// Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.


