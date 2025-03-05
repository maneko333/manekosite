var nextButton = document.getElementById('nxtbttn');
var lyricOutput = document.getElementById('lyric');
var metaOutput = document.getElementById('meta');

// quotes to use
var lyricsStore = [
	{
		lyric: "Do you remember me when the rain gathers? And do you still believe that nothing else matters? For me, it's still the autumn leaves; these ancient canopies that we used to lay beneath.",
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
	{
		lyric: "You will always be the heart in me. You will always be the past, the love, the memories.",
		title: "The Past the Love the Memory",
		artist: "A Skylit Drive"
	},
	{
		lyric: "Look at the sky, I'm still here. I'll be alive next year. I can make something good.",
		title: "Look at the Sky",
		artist: "Porter Robinson"
	},
	{
		lyric: "If you saw me, a stranger in the street, could you tell me you love me? Maybe we should both make real friends.",
		title: "Perfect Pinterest Garden",
		artist: "Porter Robinson"
	},
	{
		lyric: "Am I just one more face through the door? What's it all for? I'm taking you home.",
		title: "Mona Lisa",
		artist: "Porter Robinson"
	},
	{
		lyric: "Saw me fondly. You don't know me... but you know me.",
		title: "Everything to Me",
		artist: "Porter Robinson"
	},
	{
		lyric: "It's you and me and the air in-between. All of me and all of you. Nothing else in the room. This seems like it's everything to me.",
		title: "Everything to Me",
		artist: "Porter Robinson"
	},
	{
		lyric: "I spewed out that irresponsible mantra, 'I'm sorry I'm like this'.",
		title: "Year of the Cup",
		artist: "Porter Robinson"
	},
	{
		lyric: "It's not fair. 'Cause I knew you like the back of my hands. Well, don't you care? I gave you everything. Now I feel you even when you're not there.",
		title: "Cheerleader",
		artist: "Porter Robinson"
	},
	{
		lyric: "It's kinda sad how it's not your fault you're living in a madhouse.",
		title: "Cheerleader",
		artist: "Porter Robinson"
	}

];

nextButton.addEventListener('click', randLyric);

function randLyric() {
	var picker = Math.floor(Math.random() * lyricsStore.length);
	var pickedLyr = lyricsStore[picker];

	lyricOutput.innerText = pickedLyr.lyric;
	metaOutput.innerText = `${pickedLyr.title} - ${pickedLyr.artist}`;
}
