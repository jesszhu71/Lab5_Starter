// explore.js

window.addEventListener('DOMContentLoaded', init);
// const synth = window.speechSynthesis;
const select = document.querySelector("select");
let voices = [];


function populateVoiceList(){
  voices = synth.getVoices();
  console.log("synth length")
  console.log(voices.length)
  for (let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    if (voices[i].default){
      option.textContent += " - DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);

    select.appendChild(option);
  
  }
}

function pressTalk(e){
  const textSay = document.querySelector("#text-to-speak");
  
  console.log("inside press talk")
  e.preventDefault();
  const utterThis = new SpeechSynthesisUtterance(textSay.value)
  const selectedOptions = select.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++){
    if (voices[i].name === selectedOptions){
      utterThis.voice = voices[i];
    }
  }
  // utterThis.pitch = pitch.value;
  // utterThis.rate = rate.value;
  // console.log("before img")
  // document.querySelector("img").src = "assets/images/smiling-open.png";
  console.log("before utter")
  synth.speak(utterThis);
  document.querySelector("img").src = "assets/images/smiling-open.png";
  // synth.pause();
  utterThis.addEventListener("begin", (event) => {
    console.log("started speaking")
    document.querySelector("img").src = "assets/images/smiling-open.png";
  })
  utterThis.addEventListener("end", (event) => {
    console.log("finished speaking")
    document.querySelector("img").src = "assets/images/smiling.png";
  })
  // document.querySelector("img").src = "assets/images/smiling.png";
  // var isSpeaking = synth.speaking;
  // while (synth.paused == false){
  //   console.log("speaking")
  //   document.querySelector("img").src = "assets/images/smiling-open.png";

  // }
  // document.querySelector("img").src = "assets/images/smiling.png";


  // console.log("after img")


}

// function speakingNow(e){
//   if (e == true){
//     document.querySelector("img").src = "assets/images/smiling-open.png";
//   } else{
//     document.querySelector("img").src = "assets/images/smiling.png";
//   }

// }



const synth = window.speechSynthesis;
if(synth.onvoiceschanged !== undefined){
	synth.onvoiceschanged = () => populateVoiceList();
}

const pressToTalk = document.querySelector("button");
pressToTalk.addEventListener("click", pressTalk)


// const isSpeaking = synth.speaking;
// isSpeaking.addEventListener("change", speakingNow)


function init() {
  // TODO
  populateVoiceList();
}