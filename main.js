var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult=function(event){
    console.log(event);
    Content=event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if(Content == "picture"){
        speak();
    }
}
function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id="selfie1";
        take_snapshot();
        speak_data="This is taking your next selfie in just 10 seconds. Except for bad internet connection, which will stop this and you would have to do it again. But for the time being, s m i l e !";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }, 5000);

    setTimeout(function(){
        img_id="selfie2";
        take_snapshot();
        speak_data="This is taking your next selfie in just 15 seconds. Except for bad internet connection, which will stop this and you would have to do it again. But for the time being, s m i l e !";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }, 10000);

setTimeout(function(){
    img_id="selfie3";
    take_snapshot();
}, 15000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'">';
        }
        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'">';
        }
        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'">';
        }
    });
}


