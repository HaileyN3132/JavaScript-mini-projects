const randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);



// Obtain guess button and setup its handler
const guessBtn = document.querySelector('.guess-btn');
guessBtn.addEventListener('click', ()=>{
    //console.log('button clicked!');
    checkInput();
});


//Perform checking the user input
function checkInput(){
    const userInput = document.querySelector('.user-input');
    
    if(Number(userInput.value) == randomNum){
        displayResult('CORRECT');
        document.querySelector('.result').classList.add('correct-result');
        
    }
    else{
        displayResult('Try again! ');
        if(randomNum < Number(userInput.value)){
            addSummary(Number(userInput.value), 'Try LOWER number');
        }
        else{
            addSummary(Number(userInput.value), 'Try HIGER number');
        }
    }

}

// Display the result for each guess
function displayResult(value){
    const result = document.querySelector('.result');
    result.innerHTML = value;
}

function addSummary(userVal, hint){
    const summaryDiv = document.querySelector('.history-container');
    summaryDiv.innerHTML += `
    <p class="cell">${userVal}</p>
    <p class="cell">${hint}</p>
    `;
}
