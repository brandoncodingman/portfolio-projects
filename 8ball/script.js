function toggleMusic() {
    var audio = document.getElementById("bg-music");
    var musicButton = document.getElementById("music-btn");

    if (audio.paused) {
        audio.play();  
        musicButton.innerHTML = "Pause Music";  
    } else {
        audio.pause();  
        musicButton.innerHTML = "Play Music";  
    }
}


window.onload = function() {
    var audio = document.getElementById("bg-music");
    var musicButton = document.getElementById("music-btn");

    if (!audio.paused) {
        musicButton.innerHTML = "Pause Music";  
    } else {
        musicButton.innerHTML = "Play Music";  
    }
};

function submitQuestion(event) {
    event.preventDefault(); // Prevent default form submission
    const questionInput = document.querySelector('input[name="question"]');
    const question = questionInput.value;

    if (!question) return; 

    storeQuestion(question);

    // Show the Magic 8 Ball's answer
    showMagic8BallAnswer(question);

    questionInput.value = '';
}

// local storage
function storeQuestion(question) {
    let questions = JSON.parse(localStorage.getItem('questions')) || [];
    questions.push(question);
    localStorage.setItem('questions', JSON.stringify(questions));
}

// Show answer
function showMagic8BallAnswer(question) {
    const randomNumber = Math.floor(Math.random() * 20);
    const answer = getMagic8BallAnswer(randomNumber);
    
    const container = document.querySelector('.container');
    
    // Display the question
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.textContent = `So you asked me: ${question}`;
    container.appendChild(questionDiv);

    // Display the answer
    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer';
    answerDiv.textContent = answer;
    container.appendChild(answerDiv);

    // Display another Question
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = 'Will you ask another question?';
    container.appendChild(messageDiv);
}

// Magic 8 Ball answers
function getMagic8BallAnswer(randomNumber) {
    const answers = [
        "It is certain.", "It is decidedly so.", "Without a doubt.",
        "Yes - definitely.", "You may rely on it.", "As I see it, yes.",
        "Most likely.", "Yes.", "Outlook good.", "Yes, but... maybe.",
        "Ask again later.", "Cannot predict now.", "Don't count on it.",
        "My sources say no.", "Outlook not so good.", "Very doubtful.",
        "My reply is no.", "Definitely not.", "You may want to rethink that.",
        "I can see no other future for you."
    ];
    return answers[randomNumber] || "I don't know...";
}
