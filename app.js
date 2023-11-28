var dataOfQuizz = [
    {
        question: "What is JavaScript?",
        a: "Server Side",
        b: "Client Side",
        c: "Programming Language",
        d: "Machine Language",
        correct: "a",
    },
    {
        question: "What is stand of HTML?",
        a: "Hyperfer Test Mark Language",
        b: "Hyper Test Mark Language",
        c: "Hyfer Text Markup Language",
        d: "Hyper Text Markup Language",
        correct: "d",

    },
    {
        question: "What is stand of CSS?",
        a: "Server Side",
        b: "CAscading style sheet",
        c: "Programming Language",
        d: "Machine Language",
        correct: "b",

    },
    {
        question: "What is Bootstrap?",
        a: "Library of HTML and CSS",
        b: "Framework of HTML and CSS",
        c: "Binary Language",
        d: "Application Language",
        correct: "a",

    },
    {
        question: "What is React?",
        a: "Programmin",
        b: "Framework of javascript",
        c: "Framework of websites",
        d: "Machine Language",
        correct: "b",

    },
]
var currIndex = 0;
var usertarget = 0;

var que = document.getElementById('question');
var opt1 = document.getElementById('a_text');
var opt2 = document.getElementById('b_text');
var opt3 = document.getElementById('c_text');
var opt4 = document.getElementById('d_text');
var classScore = document.getElementById('userScore')
var allRadio = document.getElementsByTagName('input');

function displayData(){
    
    var startData  = dataOfQuizz[currIndex];
    que.innerHTML = startData.question;
    opt1.innerHTML = startData.a;
    opt2.innerHTML = startData.b;
    opt3.innerHTML = startData.c;
    opt4.innerHTML = startData.d;
    
}

var selectId = '';
function getSelectedRadio(){
// var a = 0;
   for( var a = 0; a < allRadio.length; a++){
    if(allRadio[a].checked){
        selectId = allRadio[a].id;
    }
   }
   return selectId;
}

function next(){
   
var answer1 = getSelectedRadio();console.log(answer1)
if(answer1 == dataOfQuizz[currIndex].correct){
    usertarget++;
    classScore.innerHTML = usertarget;

}
currIndex++;
if(currIndex < dataOfQuizz.length){
    displayData()
}

else{
    var div = document.getElementById('mainDiv');
    div.innerHTML =` <h2>Your correct ${usertarget} out of ${dataOfQuizz.length} corrrectly </h2>
    <button onclick="location.reload()">Retake Quizz!</button>`;
}
}




















// var quizData = [
//     {
//       question: "What is JavaScript?",
//       a: "client side",
//       b: "html",
//       c: "server lang",
//       d: "machine languge",
//       correct: "a",
//     },
//     {
//       question: "What is the full meaning of CSS?",
//       a: "Cascading Style Server",
//       b: "Cascade Styling Surface",
//       c: "Cascading Surface Sheet",
//       d: "Cascading Style Sheets",
//       correct: "d",
//     },
//     {
//       question: "What is the most popular programming language in 2022?",
//       a: "Java",
//       b: "PHP",
//       c: "html",
//       d: "JavaScript",
//       correct: "d",
//     },
//     {
//       question: "Which company developed JavaScript??",
//       a: "Netscape .",
//       b: "goolge",
//       c: "mete company",
//       d: "spice X",
//       correct: "a",
//     },
//     {
//       question: "What does HTML stand for?",
//       a: "Hypertext Markup Language",
//       b: "Cascading Stylesheet",
//       c: "JavaScript Object Notation",
//       d: "Hyper Markup Language",
//       correct: "a",
//     },
//     {
//       question: "What year was JavaScript launched?",
//       a: "1998",
//       b: "1993",
//       c: "1995",
//       d: "2000",
//       correct: "c",
//     },
//     {
//       question: "All these are Server Side Language except?",
//       a: "HTML",
//       b: "PHP",
//       c: "Node.js",
//       d: "Ruby on rails",
//       correct: "a",
//     },
//     {
//       question: "All these are JavaScript Framework except?",
//       a: "Laravel",
//       b: "React.js",
//       c: "Node.js",
//       d: "Vue.js",
//       correct: "a",
//     }
//   ];
//   var currInd = 0;
//   var score = 0;
//   var eleQues = document.getElementById("question");
//   var eleA = document.getElementById("a_text");
//   var eleB = document.getElementById("b_text");
//   var eleC = document.getElementById("c_text");
//   var eleD = document.getElementById("d_text");
//   var eleScore = document.getElementById("score");
//   var selectedAnswer = "";
// var allRadioEle = document.getElementsByTagName("input") 
//   function displayData(){

// var currData = quizData[currInd];
// eleQues.innerHTML = currData.question;
// eleA.innerHTML = currData.a
// eleB.innerHTML = currData.b
// eleC.innerHTML = currData.c
// eleD.innerHTML = currData.d
//   }

//   function getSelectedRadio(){

// for(var i=0;i<allRadioEle.length;i++){
//     if(allRadioEle[i].checked){
//  selectedAnswer = allRadioEle[i].id
//     }
// }
// return selectedAnswer;
//   }

//   function next(){
//     var answer = getSelectedRadio();
 
// if(answer == quizData[currInd].correct){
//         score++;
//         eleScore.innerHTML = score;
//     }
//     currInd++;
//     if(currInd < quizData.length){
//         displayData()
//     }
//     else{
//         // console.log("asdsa")
//         var div = document.getElementById("mainDiv");
//         div.innerHTML =      `<h2>You answered ${score} out of ${quizData.length} correctly
//         .</h2>
//         <button onclick="location.reload()">Retake Quiz!</button>`;
//     }
//   }










