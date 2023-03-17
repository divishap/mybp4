function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
        classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BJyrhDZqk/model.json",modelReady);
        
    }
    
    function modelReady(){
        console.log("modelloded");
        classifier.classify(gotResults);
    
    }

    function gotResults(error,results){
        if(error){
            console.error(error);
        }
    }