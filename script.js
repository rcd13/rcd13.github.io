document.addEventListener('DOMContentLoaded', function () {
    const responses = [
        { text: "Go Bills", image: "images/potato" },
        { text: "Stay humble", image: "images/josh1.1" },
        { text: "Pressure is a privilege. It means people believe in you.", image: "images/josh2" },
        { text: "I trust my preparation and my teammates. It's about going out there and executing.", image: "images/josh3" },
        { text: "We got a great team this year and I have a good feeling about this", image: "images/josh4" },
        { text: "We're just taking it one game at a time", image: "images/josh5" },
        { text: "You got to continue to trust the process, stick to what you know, learn from what happened and move on", image: "images/josh6" },
        { text: "I'm just trying to be the best quarterback possible.", image: "images/josh7" },
        { text: "At the end of the day, it's not where you get drafted. It's being surrounded by the right people, the right players, the right coaches, how you present yourself, how you work hard.", image: "images/josh8" },
        { text: "You can't focus on the noise. It's about staying grounded and taking things one play at a time.", image: "images/josh9" },
        { text: "Adversity is like the wind off Lake Erie—cold and unforgiving, but it makes you tougher if you face it head-on.", image: "images/josh10" },
        { text: "No one circles the wagons like the Buffalo Bills. That’s the mentality you need: stick together, trust your team, and fight for each other.", image: "images/josh11" },
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
