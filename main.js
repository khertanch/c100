var speechrecognition=window.webkitSpeechRecognition;

var recognition=new speechrecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
   var content= event.results[0][0].transcript;
   console.log(content);
   document.getElementById("textbox").innerHTML=content;
   if(content=="Take my selfie."){
    console.log("Taking selfie");
    speak();
   }
}
camera=document.getElementById("camera");

function speak(){
    var synth=window.speechSynthesis;
    speech_data="taking your selfie in 5 seconds";
    var utterthis= new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function(){
        snapshot();
        send();
    },5000);
        
    
}
Webcam.set({
    width:360,
    height:250,
    image_format:'Png',
   Png_quality:90
});

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_taken" src="'+data_uri+'">;'
            });
            Webcam.snap(function(data_uri){
                document.getElementById("result1").innerHTML='<img id="selfie_taken" src="'+data_uri+'">;'
                    });
                     Webcam.snap(function(data_uri){
                        document.getElementById("result2").innerHTML='<img id="selfie_taken" src="'+data_uri+'">;'
                            });



    
}
function send(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_taken").src;
    link.href=image;
    link.click();
}