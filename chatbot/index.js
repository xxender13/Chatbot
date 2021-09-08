const startBtn = document.querySelector("#start-btn");
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;

startBtn.addEventListener("click", () => {

    recognition.start();
});

let utter = new SpeechSynthesisUtterance("Hi,how are you?");
utter.onend = () => {
    recognition.start();
};
recognition.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    if (transcript === "hello") {

        recognition.stop();
        utter.text = "Hi,how are you?";

        synth.speak(utter);


    } else if (transcript === "goodbye") {
        recognition.stop();
        utter.text = "Hope to see you soon";



        synth.speak(utter);
    } else if (transcript === "good morning") {
        recognition.stop();
        utter.text = "good morning, how can I help you";



        synth.speak(utter);

    } else if (transcript === "good night") {
        recognition.stop();
        utter.text = "good night hope to see you soon";



        synth.speak(utter);
    } else if (transcript === "home") {
        recognition.stop();


        window.open("file:///C:/inetpub/wwwroot/project/index.html")


    } else if (transcript === "my company") {
        recognition.stop();
        window.open("http://agniforge.com/index.html")
    }




};