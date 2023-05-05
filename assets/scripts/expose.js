// expose.js
window.addEventListener('DOMContentLoaded', init);

// import JSConfetti from 'js-confetti'

function changePic(e){
  console.log(e.target.value);
  if (e.target.value == "air-horn"){
    console.log("is airhorn");
    document.querySelectorAll("img")[0].src = "assets/images/air-horn.svg" ;
    document.querySelectorAll("audio")[0].src = "assets/audio/air-horn.mp3" ;
  }
  if (e.target.value == "car-horn"){
    console.log("is carhorn");
    document.querySelectorAll("img")[0].src = "assets/images/car-horn.svg" ;
    document.querySelectorAll("audio")[0].src = "assets/audio/car-horn.mp3" ;
  }
  if (e.target.value == "party-horn"){
    console.log("is partyhorn");
    document.querySelectorAll("img")[0].src = "assets/images/party-horn.svg"; 
    document.querySelectorAll("audio")[0].src = "assets/audio/party-horn.mp3" ;
  }
}

function changeVol(e){
  document.querySelector("audio").volume = (e.target.value)/100
  if (e.target.value == 0){
    // display the mute
    document.querySelectorAll("img")[1].src = "assets/icons/volume-level-0.svg";
  } else if (e.target.value < 33){
    // display first vol level
    document.querySelectorAll("img")[1].src = "assets/icons/volume-level-1.svg";
  } else if (e.target.value < 67){
    // disaply second vol level
    document.querySelectorAll("img")[1].src = "assets/icons/volume-level-2.svg";
  } else {
    // display thrid vol level
    document.querySelectorAll("img")[1].src = "assets/icons/volume-level-3.svg";
  }
}


function clickSound(e){
  document.querySelector("audio").currentTime=0;
  document.querySelector("audio").play()
  // console.log(document.querySelectorAll("audio")[0].src)
  if (document.querySelectorAll("audio")[0].src.endsWith("party-horn.mp3")){
    console.log("confetti hereeee")
    jsConfetti.addConfetti()
  }
  

}


const jsConfetti = new JSConfetti();




function init() {
  // TODO
  console.log("initinit")
  // const selectVolume = document.querySelector("#volume");
  // selectVolume.addEventListener("change", changeVol);
  const selectElement = document.querySelector("#horn-select");
  selectElement.addEventListener("change", changePic);

  const selectVolume = document.querySelector("#volume");
  selectVolume.addEventListener("change", changeVol);

  const playSound = document.querySelector("button")
  playSound.addEventListener("click", clickSound);

  // const jsConfetti = new JSConfetti();
    

}


