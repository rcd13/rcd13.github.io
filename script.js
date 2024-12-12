document.addEventListener('DOMContentLoaded', function () {
    const responses = [
        { text: "It is certain", image: "images/certain.png" },
        { text: "Ask again later", image: "images/ask-again.png" },
        { text: "Cannot predict now", image: "images/cannot-predict.png" },
        { text: "Don't count on it", image: "images/dont-count-on-it.png" },
        { text: "Outlook not so good", image: "images/outlook-bad.png" },
        { text: "Yes, definitely", image: "images/yes-definitely.png" },
        { text: "You may rely on it", image: "images/rely-on-it.png" },
        { text: "Very doubtful", image: "images/doubtful.png" },
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
