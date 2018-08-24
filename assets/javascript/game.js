//This are the different bands they are going to guess
var bands = ['the killers','coldplay','one republic'];
//This variable safe a random band from the array
var secretBand = bands[Math.floor(Math.random() * bands.length)];
//In letters we are saving all the letters that have been clicked so we don´t repeat
var letters = [];
//variable that saves the array with the blanck spaces
var blanksToFill = dibujarEspacios(secretBand);
//Variable that counts the letters that are correct
var letrasCorrectas=0;
//counter for the wins
var wins = 0;
//counter for the loses
var loses = 0;

//DOM
var blanks = document.getElementById("blanks");
var wrong = document.getElementById("chosenLetters");
var remain = document.getElementById("remainShots");
var result = document.getElementById("result");
var ganadas = document.getElementById("wins");
var perdidas = document.getElementById("loses");

blanks.textContent = blanksToFill.join(" ");
//blanks.innerHTML = blanksToFill.join(" ");

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
        //it writes on the id = wrongLetters on the HTML
        wrong.textContent = letters;
        wrong.style.background = "white";
        
    }else if(letters.indexOf(entrada) >= 0){
        console.log("You already enter that letter");
        wrong.textContent = "You already enter that letter";
        wrong.style.background = "yellow";
    }else{
        console.log("You didn´t enter a valid key");
        wrong.textContent = "You didn´t enter a valid key";
        wrong.style.background = "yellow";
    }
};

//function to create an array with the blank spaces the user has to fill
function dibujarEspacios(banda){
    var espacios = [];
    for(var i = 0; i < banda.length; i ++){
        if(isLetter(banda[i])){
            espacios.push('__');
        }else{
            //espacios.push('[ ]');
            espacios.push('&blank;');
        }
    }
    //console.log(espacios);
    return espacios;
}
 



//function that decides if the word is correct and replaced the blanksToFill array
function hangman(char){
    
    if(secretBand.indexOf(char)>=0 && isLetter(char)){
        for(var j=0; j < secretBand.length; j++){
            if(secretBand[j] === char ){
                blanksToFill[j]=char;
                
            }
        }
        if(letters.indexOf(char) < 0){
            result.innerHTML = "<h1>CORRECT</h1>";
            result.style.background = "green";
            letrasCorrectas++;
        }
    }else{
        result.innerHTML = "<h1>WRONG</h1>";
        result.style.background = "red";
    }

    // prints how the word is forming
    console.log(blanksToFill);
    blanks.innerHTML =  blanksToFill.join(" ");
    //
    //console.log(letrasCorrectas);
    return letrasCorrectas;
};

function reset(ganador,perdedor){
    secretBand = bands[Math.floor(Math.random() * bands.length)];
    blanksToFill = dibujarEspacios(secretBand);
    letrasCorrectas=0;
    letters = [];
    wins += ganador;
    loses += perdedor; 
}




//THE GAME STARTS   
document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    hangman(letter);
    saveLetter(letter);

    console.log("total letters: " +letters.length);
    console.log("# of correct letters: "+letrasCorrectas);
    console.log("# of wrong letters: "+(letters.length-letrasCorrectas));
    remain.textContent = "Remaining Shots: " + (10-(letters.length-letrasCorrectas));


   if((10-(letters.length-letrasCorrectas)) === 0){
        result.innerHTML = "<h1>LOSER</h1><h4>Press [Enter] to play again!</h4>";
        result.style.background = "red";
        reset(0,1);
   }

   if(blanksToFill.indexOf('__')<0){
        result.innerHTML = "<h1>YOU WON</h1><h4>Press [Enter] to play again!</h4>";
        result.style.background = "blue";       
        console.log("YOU WON");
        reset(1,0);

   }
   console.log("wins: " + wins);
   ganadas.textContent = "wins: " + wins;
   console.log('loses: '+ loses);
   perdidas.textContent = 'loses: '+ loses;

 
};

