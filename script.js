document.addEventListener('DOMContentLoaded', function () {
    const responses = [
        { text: "Go Bills", image: "images/potato" },
        { text: "Stay humble", image: "images/josh1" },
        { text: "We got a great team this year and I have a good feeling about this", image: "images/josh2" },
        { text: "We're just taking it one game at a time", image: "images/potato" },
        { text: "You got to continue to trust the process, stick to what you know, learn from what happened and move on", image: "images/potato" },
        { text: "I'm just trying to be the best quarterback possible.", image: "images/potato" },
        { text: "At the end of the day, it's not where you get drafted. It's being surrounded by the right people, the right players, the right coaches, how you present yourself, how you work hard.", image: "images/potato" },
        { text: "Very doubtful", image: "images/potato" },
    ];

    const shakeButton = document.getElementById('shake-button');
    const responseText = document.getElementById('response-text');
    const responseImage = document.getElementById('response-image');

    shakeButton.addEventListener('click', function () {
        const question = document.getElementById('question').value.trim();
        
        if (question === "") {
            responseText.textContent = "Please ask a question!";
            responseImage.style.display = "none";
            return;
        }

        const randomIndex = Math.floor(Math.random() * responses.length);
        const randomResponse = responses[randomIndex];

        responseImage.src = randomResponse.image;
        responseImage.style.display = "block";
        responseText.textContent = randomResponse.text;
    });
});
