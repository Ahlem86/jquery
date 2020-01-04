function popUp(event) {
  console.log(event);
  var btnId = event.target.id;
  $(`.${btnId}`).modal({
    fadeDuration: 100
  });
}

function myBold() {
  if (feedback.style.fontWeight == "bold") {
    feedback.style.fontWeight = "normal";
  } else {
    feedback.style.fontWeight = "bold";
  }
}

function myStyle2() {
  if (feedback.style.fontStyle == "italic") {
    feedback.style.fontStyle = "normal";
  } else {
    feedback.style.fontStyle = "italic";
  }
}

function myStyle3() {
  if (feedback.style.textDecoration == "underline") {
    feedback.style.textDecoration = "none";
  } else {
    feedback.style.textDecoration = "underline";
  }
}

function mySelt1() {
  var x = document.getElementById("mySelect").value;

  document.getElementById("feedback").style.fontSize = x;
}

function mySelt2() {
  var x = document.getElementById("myFont").value;

  document.getElementById("feedback").style.fontFamily = x;
}
