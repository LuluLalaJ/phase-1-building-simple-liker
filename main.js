// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


//add event listener to the heart 

const likes = document.querySelectorAll('.like-glyph')
//is there a way to use get element by ID?
//any other way to select the like?
likes.forEach(like => {
  like.addEventListener('click', updateLikeOnServer)
})

function updateLikeOnServer(event) {
//the call back of the event listener is to send a request to the server
  const heart = event.target; 
  mimicServerCall('serverURL')
  //if successful:  the heart button changes 
  //is it possible to pass on a callback function? 

    // .then (() => {
    //   if (heart.textContent === EMPTY_HEART) {
    //       heart.textContent = FULL_HEART
    //       heart.classList.add('activated-heart')
    //   } else {
    //       heart.textContent = EMPTY_HEART
    //       heart.classList.remove('activated-heart')
    //   }
    // })

    .then(() => updateLikeOnDOM(heart))

  //if unsuccessful: the error message appears 

    // .catch(error => {
    //   const errorStatus = document.getElementById('modal').classList;
    //   errorStatus.remove('hidden'); 
    //   setTimeout(() => errorStatus.add('hidden'), 3000)
    // })

    .catch((error) => showError(error))
}

function updateLikeOnDOM(heart) {
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.classList.add('activated-heart')
  } else {
    heart.textContent = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
}

function showError(error){
    const errorStatus = document.getElementById('modal').classList;
    errorStatus.remove('hidden'); 
    setTimeout(hideError, 3000)
//should not call the function in setTimeout; 
//otherwise it will be executed immediately 

}


function hideError(){
  const errorStatus = document.getElementById('modal');
  errorStatus.classList.add('hidden'); 
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
