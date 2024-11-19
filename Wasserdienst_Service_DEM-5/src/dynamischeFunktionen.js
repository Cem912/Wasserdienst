// dynamischeFunktionen.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Standardformularverhalten
    window.location.href = "welcome.html"; // Leitet zur neuen Seite weiter
});
