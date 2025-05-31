const start = document.querySelector("#start");

const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRec();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US"; // or 'ar-TN' if you want

start.addEventListener("click", () => {
  recognition.start();
  console.log("Listening...");
});

recognition.addEventListener("audiostart", (event) => {
  console.log("Audio capturing started", event);
});

recognition.addEventListener("result", (event) => {
  let last = event.results.length-1
  
  let Tursted  = event.results[last].isFinal
  let Confidence  = event.results[last][0].confidence
  
 
   
  if(Confidence>0.85 && Tursted == true ){
    console.log(event.results[last][0].transcript.trim())
let command  = event.results[last][0].transcript.trim();

 if (command.toLowerCase()&& command.toLowerCase().includes("youtube") ) {
    window.open("https://www.youtube.com", "_blank");
  } else if (command === "change color") {
    document.body.style.backgroundColor = "lightblue";
  }









  }

});



// Optional: Auto-restart if it stops
recognition.onend = () => {
  console.log("Recognition ended, restarting...");
  recognition.start();
};


// stuff 

                                   
<pre>                
              
let updatedUsers  = Object.fromEntries( 
    Object.entries(Users).filter(([key]) => key !== remove)
);

console.log(updatedUsers);
      
      const query = { _id: ObjectId(req.params.id) };
    const collection = db.collection("posts");
    const result = await collection.deleteOne(query);
     
 this solution for this data when the script does not wokring  Set-ExecutionPolicy RemoteSigned
  
    
const items = document.querySelectorAll(".card");

items.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        item.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(1.1)', opacity: 0.8 }
        ], {
            duration: 300,
            fill: 'forwards'
        });
    });
}); 
</pre>
               
<img src="wallper.jpg"><img/>

  
