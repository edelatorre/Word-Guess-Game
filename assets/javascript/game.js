//This are the different bands they are going to guess
var bands = ['the killers','coldplay','one republic'];
//This variable safe a random band from the array
var secretBand = bands[Math.floor(Math.random() * bands.length)];
//In letters we are saving all the letters that have been clicked so we don´t repeat
var letters = [];

function isLetter(str) {
    if (str.length === 1 && str.match(/[a-z]/i)){
        return true;
    }else{
        return false;
    };
};
//function to know if the user enters a letter and to save them to an array so they don´t repeat
function saveLetter(entrada){    
    if(isLetter(entrada) && letters.indexOf(entrada) <  0){
        letters.push(entrada);
        console.log(letters);
    }else if(letters.indexOf(entrada) >= 0){
        console.log("You already enter that letter");
    }else{
        console.log("You didn´t enter a valid key");
    }
};

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    saveLetter(letter);
    
};

