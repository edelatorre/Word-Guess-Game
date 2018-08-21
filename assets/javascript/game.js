//This are the different bands they are going to guess
var bands = ['the killers','coldplay','one republic'];
//This variable safe a random band from the array
var secretBand = bands[Math.floor(Math.random() * bands.length)];


function isLetter(str) {
  if (str.length === 1 && str.match(/[a-z]/i)){
    return true;
    }else{
        return false;
    };
};

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    if(isLetter(letter)){

    }


};

