function Library(name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlists = []
}

function Playlist(name) {
  this.name = name,
  this.tracks = []
}

function Track(title, rating, trackLength) {
  // title, a rating (an integer from 1 to 5) and a length (integer in seconds)
  this.title = title,
  this.rating = rating,
  this.trackLength = trackLength
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
  let numTracks = 0;
  let sumRatings = 0;
  // calculate the rating by averaging the rating of its tracks
  this.tracks.forEach(function (track) {
    numTracks++;
    sumRatings += track.rating;
  });
  return (sumRatings / numTracks);
}

Playlist.prototype.totalDuration = function() {
  let sumDuration = 0;
  // sum the duration of all of its tracks
  this.tracks.forEach(function (track) {
    sumDuration += track.trackLength;
  });
  return sumDuration;
}

const newLibrary = new Library("Viccy\'s library", "Viccy");
const newPlaylist = new Playlist("Dance");
const newPlaylist2 = new Playlist("groove");
const track1 = new Track("Ibiza special", 3, 700);
const track2 = new Track("Wonderwall", 4, 250);
const track3 = new Track("Tender", 5, 420);
const track4 = new Track("Jazz", 4, 890);
const track5 = new Track("You spin me right round", 2, 270);


newLibrary.addPlaylist(newPlaylist);
newPlaylist.addTrack(track1);
newLibrary.addPlaylist(newPlaylist2);
newPlaylist.addTrack(track2);
newPlaylist.addTrack(track3);
newPlaylist.addTrack(track4);
newPlaylist.addTrack(track5);


console.log(newLibrary);
console.log(newPlaylist);
console.log(newPlaylist.totalDuration());
console.log(newPlaylist.overallRating());
