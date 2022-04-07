/* Instructions

1. --Allow the user to type a custom name into the title of the app, and save that name in a cookie when the save button is clicked.
1. --When refreshing the app, the name stored in the cookie is retrieved and populates the title.
1. --Allow the user to type a note into the note area, and save that note content to localstorage when the save button is clicked.
1. --When refreshing the app, the note content is retrieved from localstorage and populates the note area.
1. --When the clear button is clicked, the content in the note area is cleared, and the note in localstorage is cleared as well.

*/


// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE

window.addEventListener("load", () => {
  let userName = document.cookie;
  if(userName != undefined){
    let stringSplit = userName.split('=');
    if(stringSplit[0] === "name"){
      nameSpan.innerText = stringSplit[1];
    } else {
      nameSpan.innerText = "Your Name";
    }
  }

    if(localStorage.getItem("note") != null) {
      let thisNote = localStorage.getItem("note");
      let pureText = thisNote.split('"');
      textarea.value = pureText[1];
    }
  
});

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  let noteTaker = nameSpan.innerText;
  let cookieString = "name=" + noteTaker;
  document.cookie = cookieString;
  // save textarea's content to localstorage
  let myNote = JSON.stringify(textarea.value);
  localStorage.setItem('note',myNote);
  localStorage.getItem('note');
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  textarea.value = "";
  // Clear localstorage's content
  localStorage.clear();
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp