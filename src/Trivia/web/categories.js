
var questionHTML="";
var theUrl="https://opentdb.com/api.php?amount=10"
//http Get request
function httpGet()
{   var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var data=JSON.parse(httpGet());

//gets question
function filterQuestion(){
    var theQuestion=data["results"][0]["question"];
        return theQuestion
}
//gets correct answer
function filterAnswer(){
    var theAnswer=data["results"][0]["correct_answer"];
    return theAnswer;
}

//gets all other answers
function filterIncorrect(){
    var incorrect=data["results"][0]["incorrect_answers"];
    return incorrect;
}
//seperates choices into ABCD
var choiceA=[];
var choiceB=[];
var choiceC=[];
var choiceD=[];

//returns List of all choices
function choices(){
    var x=[];
    x.push(filterAnswer());
    for(var i of filterIncorrect()){
        x.push(i)
    };
    return x
}
//shuffles choices in the choices array so answer isn't always at index 0
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
//stores shuffled list in variable
var shuffledChoices=shuffle(choices());


//adds elements of shuffled list into own arrays
choiceA.push(shuffledChoices[0]);
choiceB.push(shuffledChoices[1]);
choiceC.push(shuffledChoices[2]);
choiceD.push(shuffledChoices[3]);

console.log(filterQuestion());

























