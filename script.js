const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("O reconhecimento de voz foi iniciado.");
};

recognition.onresult = function(event) {
    const result = event.results[0][0].transcript;
    console.log("Você disse: " + result);
 
 document.getElementById("result").textContent = result;

};

document.getElementById("start-btn").addEventListener("click", function() {
    recognition.start();
});


