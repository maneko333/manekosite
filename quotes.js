var nextButton = document.getElementById('nxtbttn');
var lyricOutput = document.getElementById('lyric');
var metaOutput = document.getElementById('meta');

// quotes to use
var lyricsStore = [
    {
        lyric: "Do you remember me when the rain gathers? And do you still believe that nothing else matters?\nFor me, it's still the autumn leaves; these ancient canopies that we used to lay beneath.",
        title: "Euclid",
        artist: "Sleep Token"
    },
    {
        lyric: "It's the ones with the sorest throats who've done the most singing.",
        title: "Laura Laurent",
        artist: "Bright Eyes"
    },
    {
        lyric: "You can only blame your problems on the world for so long, before they all become the same old song.",
        title: "The (Shipped) Gold Standard",
        artist: "Fall Out Boy"
    },
    {
        lyric: "I'm a stitch away from making it and a scar away from falling apart.",
        title: "The (After) Life of the Party",
        artist: "Fall Out Boy"
    },
    {
        lyric: "Time is luck and I wish ours overlapped more... or for longer.",
        title: "Baby Annihilation",
        artist: "Fall Out Boy"
    },
    {
        lyric: "I'm sorry every song's about you.",
        title: "Fourth of July",
        artist: "Fall Out Boy"
    },
    {
        lyric: "I cast a spell over the west to make you think of me the same way I think of you.",
        title: "Bang the Doldrums",
        artist: "Fall Out Boy"
    },
    {
        lyric: "I'm not growing up, I'm just burning out.",
        title: "Burnout",
        artist: "Green Day"
    },
];

nextButton.addEventListener('click', randLyric);

function randLyric() {
    var picker = Math.floor(Math.random() * lyricsStore.length);
    var pickedLyr = lyricsStore[picker];
    
    lyricOutput.innerText = pickedLyr.lyric;
    metaOutput.innerText = `${pickedLyr.title} - ${pickedLyr.artist}`;
}
