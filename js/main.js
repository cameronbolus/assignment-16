var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

/////////////////////////Countdown Timer/////////////////////////////

var countdownTimer = document.querySelector('.countdown')
var remainingTimeInSecs = 1500
var pomodoroComp = document.querySelector('.pomComplete')

///////////////////////From Input to Output//////////////////////////

var inputButton = document.querySelector('.addButton')
var outputText = document.querySelector('.output-text')
var inputText = document.querySelector('.input-text')
var insideInput = document.querySelector('.input-text input')
inputButton.addEventListener('click', function(){
    var insideTextInput = insideInput.value
    outputText.innerHTML = insideTextInput
    inputText.style.display = 'none'
/////////////Event Listener to Start Countdown//////////////////////
    var countDown = setInterval(function(){
      remainingTimeInSecs--
      var minutesOnTimer = Math.floor(remainingTimeInSecs/60)
      var secondsOnTimer = remainingTimeInSecs % 60
      var secondsOnTimerString = secondsOnTimer

      console.log(minutesOnTimer,'----', secondsOnTimer)
      if(secondsOnTimer < 10){
        secondsOnTimerString = "0" + secondsOnTimer
      }

      if(remainingTimeInSecs <= 0){
        clearInterval(countDown)
        countdownTimer.style.display = 'none'
        outputText.style.display = 'none'
        pomodoroComp.style.display = 'block'
      }
      countdownTimer.innerHTML = minutesOnTimer + ":" + secondsOnTimerString
    }, 1000)

})
