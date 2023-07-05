// $(document).ready(function(){
// $(`menu`).click(function){
// $(`.meanu`).show();
// const button = document.getElementById('homeBTN');
// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById("homeBTN").onclick=function(){
//   console.log("button pressed")};

// });

// const messagesbtn = document.getElementById('meesagesbtn');
// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById("meesagesbtn").onclick=function(){
//   console.log("messageTime")};


// });
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('homeBTN');
  const messagesbtn = document.getElementById('messagesbtn');

  // ^all of declaraition code should go here

  button.onclick = function() {
    console.log("button pressed");
    document.getElementsByClassName('screen')[0].style.visibility = 'visible';
    document.getElementById("MessagesDisplay").style.display = "none";
    document.getElementById("MessagesDisplayAnimation").style.display = "none";       
    document.getElementById("contactme").style.display = "none";
    document.getElementById("bottemCoverForText").style.display = "none";

  };
  messagesbtn.onclick = function() {
    document.getElementsByClassName('screen')[0].style.visibility = 'hidden';
    document.getElementById("MessagesDisplay").style.display = "block";
    document.getElementById("bottemCoverForText").style.display = "block";
    document.getElementById("contactme").style.display = "block";



  };
});



// }});
// document.addEventListener("DOMContentLoaded", function() {
//   var homeButtons = document.getElementsByClassName("homeBTN");
//   for (var i = 0; i < homeButtons.length; i++) {
//     homeButtons[i].addEventListener("click", homeBTNPressed);
//   }
// });
// function homeBTNPressed() {
//   console.log("homebuttonnowpressed");
// }
// Select the button element
// const button = document.getElementsByClassName('homeBTN');

// // Attach an event listener to the button
// button.addEventListener('click', function() {
//   console.log('Button clicked!');
// });