
function hideElementId(setparamenter){
    const element = document.getElementById(setparamenter);
    element.classList.add('hidden');
}
function showElementId(setparamenter){
    const element = document.getElementById(setparamenter);
    element.classList.remove('hidden');
}
function addBackGroundColorSet(setparamenter){
    const element = document.getElementById(setparamenter);
    element.classList.add('color code');
}
function removeBackGroundColorSet(setparamenter){
    const element = document.getElementById(setparamenter);
    element.classList.remove('color code');
}




function getRandomAlphabet() {
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function continueGame(){
// step -1 :generate a random alphabet
const alphabet = getRandomAlphabet();
console.log('your random alphabet', alphabet);
const currentAlphabetElement = doucment.getElementById('idname');
currentAlphabetElement.innertext = alphabet;
}


// setBackground


// }



// function play(){

// }

