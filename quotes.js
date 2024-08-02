// create a variable for the button and output
var aboutBtn = document.getElementById('nxtbttn');
var aboutOutput = document.getElementById('randqt');

// define our list of items
// you can add as many as you like, no need to keep track!
var itemsArr = [
    "Do you remember me when the rain gathers? And do you still believe that nothing else matters?\nFor me, it's still the autumn leaves; these ancient canopies that we used to lay beneath.",
    "It's the ones with the sorest throats who've done the most singing.",
    "You can only blame your problems on the world for so long, before they all become the same old song.",
    "I'm a stitch away from making it and a scar away from falling apart.",
    "Time is luck and I wish ours overlapped more, or for longer.",
    "I'm sorry every song's about you.",
    "Time cast a spell on you so you won't forget me.\nI know I could've loved you but you would not let me.",
    "I cast a spell over the west to make you think of me the same way I think of you."
];

aboutBtn.addEventListener('click', displayItem);

function displayItem() {
    // generates a random index
    var rand = Math.floor(Math.random() * itemsArr.length);
    aboutOutput.innerText = itemsArr[rand];
}
