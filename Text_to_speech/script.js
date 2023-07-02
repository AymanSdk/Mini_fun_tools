let speech = new SpeechSynthesisUtterance(); // this is the object that will speak
let voices = [];                             // this is the array of voices that can be used
let voicesDropdown = document.querySelector("select"); // this is the dropdown that will hold the voices




// this is the event listener that will populate the dropdown
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voicesDropdown.options[i] = new Option(voice.name, i)));
};

// this is the event listener that will change the voice
voicesDropdown.addEventListener("change", () => {
    speech.voice = voices[voicesDropdown.value];
});


// this is the speech object that will speak
document.querySelector("button").addEventListener('click', () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});