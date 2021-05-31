let counter = document.getElementById("counter");
let seconds = 0;

function incrementSeconds() {
    if (isRunning()) {
        seconds += 1;
        counter.innerText = seconds;
    }
}

let start = setInterval(incrementSeconds, 1000);

let pause = document.getElementById("pause");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");

function isRunning() {
    return (pause.innerText === "pause" ? true : false);
}

pause.addEventListener('click', () => {
    pause.innerText = (pause.innerText === "pause" ? "resume" : "pause");
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
let heartLikes = {}

heart.addEventListener("click", () => {
    let valueOfSeconds = parseInt(seconds);
    (heartLikes[valueOfSeconds] ? heartLikes[valueOfSeconds] += 1 : heartLikes[valueOfSeconds] = 1);
    let li = document.createElement("li");
    if (document.getElementById(`like-${valueOfSeconds}`)) {
        let likedLi = document.getElementById(`like-${valueOfSeconds}`)
        likedLi.innerText = `${valueOfSeconds} has been liked ${heartLikes[valueOfSeconds]} times.`;
    }
    else {
        heartCommentArea.appendChild(li);
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


