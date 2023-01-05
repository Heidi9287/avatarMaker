const selectHair = (document.getElementById("selectHair").onclick =
  function () {
    const hairDiv = document.getElementById("hairDiv");
    hairDiv.style.display = "block";
    const eyeDiv = document.getElementById("eyesDiv");
    eyeDiv.style.display = "none";
    const noseDiv = document.getElementById("noseDiv");
    noseDiv.style.display = "none";
    const browsDiv = document.getElementById("browsDiv");
    browsDiv.style.display = "none";
    const lipsDiv = document.getElementById("lipsDiv");
    lipsDiv.style.display = "none";
    const buttons = document.querySelectorAll(".selectedHair");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        document.getElementById("hair").src = buttons[i].firstChild.src;
      });
    }
  });

const selectEyes = (document.getElementById("selectEyes").onclick =
  function () {
    const eyeDiv = document.getElementById("eyesDiv");
    eyeDiv.style.display = "block";
    const hairDiv = document.getElementById("hairDiv");
    hairDiv.style.display = "none";
    const noseDiv = document.getElementById("noseDiv");
    noseDiv.style.display = "none";
    const lipsDiv = document.getElementById("lipsDiv");
    lipsDiv.style.display = "none";
    const buttons = document.querySelectorAll(".selectedEyes");
    const browsDiv = document.getElementById("browsDiv");
    browsDiv.style.display = "none";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        document.getElementById("eyes").src = buttons[i].firstChild.src;
      });
    }
  });

const selectEyebrows = (document.getElementById("selectBrows").onclick =
  function () {
    const browsDiv = document.getElementById("browsDiv");
    browsDiv.style.display = "block";
    const hairDiv = document.getElementById("hairDiv");
    hairDiv.style.display = "none";
    const eyeDiv = document.getElementById("eyesDiv");
    eyeDiv.style.display = "none";
    const lipsDiv = document.getElementById("lipsDiv");
    lipsDiv.style.display = "none";
    const buttons = document.querySelectorAll(".selectedEyeBrows");
    const noseDiv = document.getElementById("noseDiv");
    noseDiv.style.display = "none";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        document.getElementById("eyebrows").src = buttons[i].firstChild.src;
      });
    }
  });
const selectNose = (document.getElementById("selectNose").onclick =
  function () {
    const noseDiv = document.getElementById("noseDiv");
    noseDiv.style.display = "block";
    const hairDiv = document.getElementById("hairDiv");
    hairDiv.style.display = "none";
    const eyeDiv = document.getElementById("eyesDiv");
    eyeDiv.style.display = "none";
    const browsDiv = document.getElementById("browsDiv");
    browsDiv.style.display = "none";
    const lipsDiv = document.getElementById("lipsDiv");
    lipsDiv.style.display = "none";
    const buttons = document.querySelectorAll(".selectedNose");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        document.getElementById("nose").src = buttons[i].firstChild.src;
      });
    }
  });
const selectLips = (document.getElementById("selectLips").onclick =
  function () {
    const lipsDiv = document.getElementById("lipsDiv");
    lipsDiv.style.display = "block";
    const hairDiv = document.getElementById("hairDiv");
    hairDiv.style.display = "none";
    const eyeDiv = document.getElementById("eyesDiv");
    eyeDiv.style.display = "none";
    const browsDiv = document.getElementById("browsDiv");
    browsDiv.style.display = "none";
    const noseDiv = document.getElementById("noseDiv");
    noseDiv.style.display = "none";
    const buttons = document.querySelectorAll(".selectedLips");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        document.getElementById("lips").src = buttons[i].firstChild.src;
      });
    }
  });
