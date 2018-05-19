var main = document.getElementById("main");
var signUp = document.getElementById("signUp-btn");
var emailEntered = document.getElementById("email");
var dropdownEntered = document.getElementById("dropdown");
var warningMsg = document.getElementById("warning-text");

signUp.addEventListener("click", function(){
  var email = emailEntered.value;
  var dropdown = dropdownEntered.value;
  console.log(dropdown);
  checkEmail = validateEmail(email);
  if (checkEmail) {
    warningMsg.style.display = "none";
    signUp.innerText = "Submitting...";
    setTimeout(function(){
      main.removeChild(signUp);
      var endingTitle = document.createElement("h2");
      var node = document.createTextNode("Thanks for subscribing!");
      endingTitle.appendChild(node);
      var endingMsg = document.createElement("p");
      var node2 = document.createTextNode("You'll start receiving free tips and resources soon.");
      endingMsg.appendChild(node2);
      main.appendChild(endingTitle);
      main.appendChild(endingMsg);
      console.log("Email: " + email);
      console.log("Interest: " + dropdown);
    }, 2000);
  } else {
    warningMsg.style.display = "block";
  }
});

function validateEmail(mail)
{
 // console.log(mail);
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    // alert("You have entered a valid email address!")
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}
