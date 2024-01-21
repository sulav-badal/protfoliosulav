const emoji = document.getElementById("emoji");
const question = document.getElementById("question");
const yesclick = document.getElementById("yesclick");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
let yesButtonClicked = false;

noButton.addEventListener("mouseenter", () => {
    setEmojiAndMoveNoButton("crying.gif");
});

noButton.addEventListener("click", () => {
    setEmojiAndMoveNoButton("crying.gif");
});

yesButton.addEventListener("mouseenter", () => {
    emoji.innerHTML = '<img src="happy.gif" alt="Happy GIF">';
    yesclick.textContent = "You are on the right place, click me, baby!";
});

yesButton.addEventListener("mouseleave", () => {
    if (!yesButtonClicked) {
        emoji.innerHTML = '<img src="smiling.gif" alt="Smile GIF">';
        yesclick.textContent = "";
    }
});

yesButton.addEventListener("click", () => {
    emoji.innerHTML = '<img src="smiling.gif" alt="Happy GIF">';
    question.textContent = "I LOVE YOU MORE! 🥰";
    yesButtonClicked = true;
    noButton.style.display = "none";
    yesButton.style.display = "none";
    document.body.style.backgroundColor = "pink";
});

function setEmojiAndMoveNoButton(emojiSrc) {
    emoji.innerHTML = `<img src="${emojiSrc}" alt="Emoji GIF">`;
    moveNoButton();
}

function moveNoButton() {
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

