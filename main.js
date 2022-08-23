
var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot() {
    console.log(image_id);
    Webcam.snap(function(data_uri) {
        if(image_id=="selfie1") {
            document.getElementById("div1").innerHTML = '<img id="selfie1" src"'+data_uri+ '">';
        }
        if(image_id=="selfie2") {
            document.getElementById("div2").innerHTML = '<img id="selfie2" src"'+data_uri+ '">';
        }
        if(image_id=="selfie3") {
            document.getElementById("div3").innerHTML = '<img id="selfie3" src"'+data_uri+ '">';
        }
    }
}

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function() {
        image_id = "selfie1"
        take_snapshot()
        speak_data = "5 seconds until i remember what i'm supposed to do";
          var utterThis = new SpeechSynthesisUtterance(speak_data);
           synth.speak(utterThis);
    }, 5000);
    setTimeout(function() {
        image_id = "selfie2"
        take_snapshot()
        speak_data = "10 seconds until i remember what i'm supposed to do";
          var utterThis = new SpeechSynthesisUtterance(speak_data);
           synth.speak(utterThis);
    }, 10000);
    setTimeout(function() {
        image_id = "selfie3"
        take_snapshot()
        speak_data = "15 seconds until i remember what i'm supposed to do";
          var utterThis = new SpeechSynthesisUtterance(speak_data);
           synth.speak(utterThis);
    }, 15000);
    


}