let counter = document.getElementById("counter");
let seconds = 0;

function incrementSeconds() {
    // keeps the timer running unless isRunning returns false
    if (isRunning()) {
        seconds += 1;
        counter.innerText = seconds;
    }
}

// starts timer as soon as DOM is loaded
let start = setInterval(incrementSeconds, 1000);

let pause = document.getElementById("pause");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");

function isRunning() {
    // returns true or false depending on if the innerText is equal to pause or resume
    return (pause.innerText === "pause" ? true : false);
}

pause.addEventListener('click', () => {
    pause.innerText = (pause.innerText === "pause" ? "resume" : "pause");
    // iterates over all the buttons and toggles between disabled and enabled
    const buttons = [minus, plus, heart]
    buttons.forEach(button =>{
        button.disabled = !button.disabled;
    })
});

plus.addEventListener('click', () => {
    seconds += 1;
    counter.innerText = seconds;
});

minus.addEventListener('click', () => {
    seconds -= 1;
    counter.innerText = seconds;
});

let heart = document.getElementById("heart");
let heartCommentArea = document.querySelector("body > ul");
// sets up an object to gather timer number and how many times it's been clicked
let heartLikes = {}

heart.addEventListener("click", () => {
    // captures value of seconds when clicked
    let valueOfSeconds = seconds;
    // sets how many times it's been clicked for a timer number to one if on the first click
    // or increments the number by one for each subsequent click
    (heartLikes[valueOfSeconds] ? heartLikes[valueOfSeconds] += 1 : heartLikes[valueOfSeconds] = 1);
    if (document.getElementById(`like-${valueOfSeconds}`)) {
        // if li already exists then innerText is just updated with new how many times it's been clicked value
        document.getElementById(`like-${valueOfSeconds}`).innerText = `${valueOfSeconds} has been liked ${heartLikes[valueOfSeconds]} times.`;
    }
    else {
        let li = document.createElement("li");
        heartCommentArea.appendChild(li);
        // creates a new li and adds an id to verify later if this li already exists
        li.id = `like-${valueOfSeconds}`
        li.innerText = `${valueOfSeconds} has been liked 1 time.`;
    }
});

let comment = document.getElementById("comment-input");
let commentForm = document.getElementById("comment-form");
let commentArea = document.querySelector('h3');

document.addEventListener('submit', function(event) {
    event.preventDefault();
    let ul = document.createElement('ul');
    commentArea.appendChild(ul);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = comment.value;
    commentForm.reset();
});


