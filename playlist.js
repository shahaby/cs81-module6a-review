// https://github.com/shahaby/cs81-module6a-review

// Constructor function: Creaties a playlist object
function Playlist(name) {
  // Assign the name param to the instance
  this.name = name;
  // Empty array to hold songs
  this.songs = [];
  // Set current song to null
  this.currentSong = null;
}

// Object method to a song to the playlist object
Playlist.prototype.addSong = function(songTitle) {
  // Add song title to the back of array
  this.songs.push(songTitle);
};

// Object method to play first song in array
Playlist.prototype.playFirst = function() {
  // Check if array not empty
  if (this.songs.length > 0) {
    // Set current song to the first element of array
    this.currentSong = this.songs[0];
    // Console log current song title
    console.log("Now playing:", this.currentSong);
  }
};

// Object method to skip to the next song
Playlist.prototype.skipSong = function() {
  // Check if array has more than 1 element
  if (this.songs.length > 1) {
    // Remove the first element from array
    this.songs.shift();
    // Set current song to the new first element array
    this.currentSong = this.songs[0];
    // Console log the new current song
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    // Console log a message if no more elements in array
    console.log("No more songs to skip.");
  }
};

// Object method lists all songs in array
Playlist.prototype.listSongs = function() {
  // Console log playlist name
  console.log("Playlist:", this.name);
  // Console log elements in array delimited by comma
  console.log("Songs:", this.songs.join(", "));
};


// Example usage of playlist object
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst();
myMix.skipSong();
myMix.listSongs();


// 4. Add one improvement suggestion in the form of a comment
// Add a method to shuffle the playlist


// 5. Add one new method to extend the object’s behavior
// Object method removes a given song by title
Playlist.prototype.removeSong = function(songTitle) {
  const index = this.songs.indexOf(songTitle);
  if (index !== -1) {
    this.songs.splice(index, 1);
    console.log(`Removed: ${songTitle}`);
  } else {
    console.log(`Title (${songTitle}) not found!`);
  }
};
// Example usage of new method
myMix.removeSong("Chillhop Beats");
myMix.listSongs();