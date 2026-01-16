const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Your browser does not support voice typing.");
}

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = "en-US";

const documentArea = document.getElementById("document");

recognition.onresult = (event) => {
    let text = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript + " ";
    }
    documentArea.value += text;
};

function startDictation() {
    recognition.start();
}

function stopDictation() {
    recognition.stop();
}

