    // run the timer; see also timer() function
    function startTimer() {
        var i = document.forms[0].timeLimit.value;
        
        if (i == 'oneMin') {
            time = 60;
        }
        else if (i == 'fiveMin') {
            time = 300;
        }

        resetStats(); // reset stats and get a new problem
        
        running = true;
        
        count = time - 1; // set the time in seconds
        
        counter = setInterval(timer, 1000); //1000 will  run it every 1 second  

        document.getElementById('timerPrompt').innerHTML = 'Time:'; 
        
        document.getElementById('timer').style.display = 'inline'; // display the time remaining
        document.getElementById('startBtn').style.display = 'none'; // hide the Start button
        document.getElementById('stopBtn').style.display = 'inline'; // show the stop button
        document.getElementById('timeLimit').style.display = 'none'; // hide the selection list
        
        // disable options
        document.getElementById('hideStatsBtn').disabled = true;
        document.getElementById('resetBtn').disabled = true;
        document.getElementById('showStatsBtn').disabled = true;
        document.getElementById('playVideo').disabled = true;
        document.getElementById('playVideo').checked = false;
        
        document.getElementById('addition').disabled = true;
        document.getElementById('subtraction').disabled = true;
        document.getElementById('multiplication').disabled = true;
        document.getElementById('division').disabled = true;
    }
    
    // more running of the timer
    function timer() {
        document.getElementById("timer").innerHTML = count + " seconds<br />";
        
        count = count - 1;
        if (count < 0) { // when time is up...           
            window.alert('Time\'s up!'); // display a message
            
            var pctCorrect = (100*numCorrect/numAttempts).toFixed(0);
            var i;
            
            if (time == 60) {
                i = '1 minute';
            }
            else {
                i = '5 minutes';
            }
            window.alert('Time: ' + i +
                         '\nNumber correct: ' + numCorrect + 
                         '\nPercent correct: ' + pctCorrect);
           
            stopTimer();
            
            return;
        }
    } // end of timer()
    
    // stop the timer
    function stopTimer() {
        clearInterval(counter); // stop the timer
        running = false;
        

        document.getElementById('timerPrompt').innerHTML = 'Set the timer';

        document.getElementById('startBtn').style.display = 'inline'; // show the start button
        document.getElementById('stopBtn').style.display = 'none'; // hide the stop button
        document.getElementById('timeLimit').style.display = 'inline'; // show the selection list
        document.getElementById('timer').style.display = 'none'; // hide the time remaining
        
        // enable options
        document.getElementById('hideStatsBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;
        document.getElementById('showStatsBtn').disabled = false;
        document.getElementById('playVideo').disabled = false;
        
        document.getElementById('addition').disabled = false;
        document.getElementById('subtraction').disabled = false;
        document.getElementById('multiplication').disabled = false;
        document.getElementById('division').disabled = false;
    }
