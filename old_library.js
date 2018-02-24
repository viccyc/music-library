var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
           },

  // it's now a method!
  printPlaylists: function () {
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks

  // loop through playlist keys
     // add keyname and other details to a new array
    var playListArray = [];
    for (var i in this.playlists) {
      var numOfPlaylists = this.playlists[i];
      playListArray.push(numOfPlaylists.id + ": " + numOfPlaylists.name + " - " + numOfPlaylists.tracks.length + " tracks");
    }
    return playListArray;
  },

  printTracks: function () {
  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  // loop through playlist keys
     // add keyname and other details to a new array
    var tracksArray = [];
    for (var i in this.tracks) {
      var numOfTracks = this.tracks[i];
      tracksArray.push(numOfTracks.id + ": " + numOfTracks.name + " by " + numOfTracks.artist + " (" + numOfTracks.album + ")");
    }
    return tracksArray;
  },

  printPlaylist: function (playlistId) {
  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

    var completePlayList = (this.playlists[playlistId]);
    var playlistString = "";
    playlistString += completePlayList.id + ": " + completePlayList.name + " - " + completePlayList.tracks.length + " tracks: ";

    for(i = 0; i < completePlayList.tracks.length; i++) {
      var trackId = completePlayList.tracks[i];
      playlistString += this.tracks[trackId].id + ": " + this.tracks[trackId].name + " by " + this.tracks[trackId].artist + " (" + this.tracks[trackId].album + ") ";
    }
    return playlistString;
  },


  addTrackToPlaylist: function (trackId, playlistId) {
  // adds an existing track to an existing playlist
    var trackArray = (this.playlists[playlistId].tracks);
    trackArray.push(trackId);
    this.playlists[playlistId].tracks = trackArray;

    return this.playlists[playlistId].tracks;
  },


  uid: function() {
  // generates a unique id
  // (use this for addTrack and addPlaylist)
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  addTrack: function (name, artist, album) {
  // adds a track to the library
  var id = this.uid();
  this.tracks[id] = {id, name, artist, album};

  return this.tracks;
  },


  addPlaylist: function (name) {
  // adds a playlist to the library
    var id = this.uid();
    this.playlists[id] = {id, name};

    return this.playlists;
  }
};


// console.log(printPlaylists());
// console.log(printTracks());
//console.log(library.printPlaylist("p01"));
//console.log(library.addTrackToPlaylist("t03", "p02"));
//console.log(library.addTrack("Boogie!", "Viccy", "Viccy\'s Album"));
//console.log(library.addPlaylist("Viccy\'s list"));

//console.log(library.printPlaylist("p01"));