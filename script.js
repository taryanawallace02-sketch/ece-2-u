// This file contains the JavaScript functionality for the ECE 2 U web app.

document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language-selector");
    const teacherButton = document.getElementById("teacher-button");
    const parentButton = document.getElementById("parent-button");
    const backButton = document.getElementById("back-button");
    
    // Language translations
    const translations = {
        "en": {
            "welcome": "Welcome to ECE 2 U",
            "teacher": "I am a Teacher",
            "parent": "I am a Parent",
            "back": "Back",
            // Add more translations as needed
        },
        "es": {
            "welcome": "Bienvenido a ECE 2 U",
            "teacher": "Soy un Maestro",
            "parent": "Soy un Padre",
            "back": "Atrás",
            // Add more translations as needed
        },
        // Add other languages here...
    };

    // Function to change language
    function changeLanguage() {
        const selectedLanguage = languageSelector.value;
        document.getElementById("welcome-text").innerText = translations[selectedLanguage]["welcome"];
        teacherButton.innerText = translations[selectedLanguage]["teacher"];
        parentButton.innerText = translations[selectedLanguage]["parent"];
        backButton.innerText = translations[selectedLanguage]["back"];
    }

    // Event listener for language selection
    languageSelector.addEventListener("change", changeLanguage);

    // Teacher side functionality
    if (teacherButton) {
        teacherButton.addEventListener("click", function() {
            // Logic to navigate to teacher page
            window.location.href = "teacher.html"; // Replace with actual teacher page URL
        });
    }

    // Parent side functionality
    if (parentButton) {
        parentButton.addEventListener("click", function() {
            // Logic to navigate to parent page
            window.location.href = "parent.html"; // Replace with actual parent page URL
        });
    }

    // Back button functionality
    if (backButton) {
        backButton.addEventListener("click", function() {
            // Logic to navigate back to homepage
            window.location.href = "index.html";
        });
    }

    // Timer functionality
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        const interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(interval);
                // Play gentle chime sound
                const audio = new Audio('chime.mp3'); // Ensure you have a chime sound file
                audio.play();
            }
        }, 1000);
    }

    // Example of starting a timer
    const movementBreakButton = document.getElementById("movement-break-button");
    if (movementBreakButton) {
        movementBreakButton.addEventListener("click", function() {
            const timerDisplay = document.getElementById("timer-display");
            startTimer(30, timerDisplay); // 30 seconds timer
        });
    }

    // Add more functionality as needed for lesson plans, behavior scripts, etc.
});