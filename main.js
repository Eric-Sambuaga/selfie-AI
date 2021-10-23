var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start()
{
document.getElementById("textbox").innerHTML = " ";
recognition.start();

}
recognition.onresult = function(event)
{
    console.log(event);
    var Content = event.results[0][0].transcript;
document.getELementById("textbox").innerHTML = Content;
console.log(Content);
}