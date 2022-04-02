const questions = [
{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
{ letter: "a", answer: "aTest1", status: 0, question: "CON LA A. Test1"},
{ letter: "a", answer: "aTest2", status: 0, question: "CON LA A. Test2"},
{ letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
{ letter: "b", answer: "bTest1", status: 0, question: "CON LA B. Test1"},
{ letter: "b", answer: "bTest2", status: 0, question: "CON LA B. Test2"},
{ letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
{ letter: "c", answer: "cTest1", status: 0, question: "CON LA C. Test1"},
{ letter: "c", answer: "cTest2", status: 0, question: "CON LA C. Test2"},
{ letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
{ letter: "d", answer: "dTest1", status: 0, question: "CON LA D. Test1"},
{ letter: "d", answer: "dTest2", status: 0, question: "CON LA D. Test2"},
{ letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
{ letter: "e", answer: "eTest1", status: 0, question: "CON LA E. eTest1"},
{ letter: "e", answer: "eTest2", status: 0, question: "CON LA E. eTest2"},
{ letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
{ letter: "f", answer: "fTest1", status: 0, question: "CON LA F. Test1"},
{ letter: "f", answer: "fTest2", status: 0, question: "CON LA F. Test2"},
{ letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
{ letter: "g", answer: "gTest1", status: 0, question: "CON LA G. Test1"},
{ letter: "g", answer: "gTest2", status: 0, question: "CON LA G. Test2"},
{ letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
{ letter: "h", answer: "hTest1", status: 0, question: "CON LA H. Test1"},
{ letter: "h", answer: "hTest2", status: 0, question: "CON LA H. Test2"},
{ letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
{ letter: "i", answer: "iTest1", status: 0, question: "CON LA I. Test1"},
{ letter: "i", answer: "iTest2", status: 0, question: "CON LA I. Test2"},
{ letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
{ letter: "j", answer: "jTest1", status: 0, question: "CON LA J. Test1"},
{ letter: "j", answer: "jTest2", status: 0, question: "CON LA J. Test2"},
{ letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
{ letter: "k", answer: "kTest1", status: 0, question: "CON LA K. Test1"},
{ letter: "k", answer: "kTest2", status: 0, question: "CON LA K. Test2"},
{ letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
{ letter: "l", answer: "lTest1", status: 0, question: "CON LA L. Test1"},
{ letter: "l", answer: "lTest2", status: 0, question: "CON LA L. Test2"},
{ letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
{ letter: "m", answer: "mTest1", status: 0, question: "CON LA M. Test1"},
{ letter: "m", answer: "mTest2", status: 0, question: "CON LA M. Test2"},
{ letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
{ letter: "n", answer: "nTest1", status: 0, question: "CON LA N. Test1"},
{ letter: "n", answer: "nTest2", status: 0, question: "CON LA N. Test2"},
{ letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
{ letter: "ñ", answer: "ñTest1", status: 0, question: "CONTIENE LA Ñ. Test1"},
{ letter: "ñ", answer: "ñTest2", status: 0, question: "CONTIENE LA Ñ. Test2"},
{ letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
{ letter: "o", answer: "oTest1", status: 0, question: "CON LA O. Test1"},
{ letter: "o", answer: "oTest2", status: 0, question: "CON LA O. Test2"},
{ letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
{ letter: "p", answer: "pTest1", status: 0, question: "CON LA P. Test1"},
{ letter: "p", answer: "pTest2", status: 0, question: "CON LA P. Test2"},
{ letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
{ letter: "q", answer: "qTest1", status: 0, question: "CON LA Q. Test1"},
{ letter: "q", answer: "qTest2", status: 0, question: "CON LA Q. Test2"},
{ letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
{ letter: "r", answer: "rTest1", status: 0, question: "CON LA R. Test1"},
{ letter: "r", answer: "rTest2", status: 0, question: "CON LA R. Test2"},
{ letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
{ letter: "s", answer: "sTest1", status: 0, question: "CON LA S. Test1"},
{ letter: "s", answer: "sTest2", status: 0, question: "CON LA S. Test2"},
{ letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
{ letter: "t", answer: "tTest1", status: 0, question: "CON LA T. Test1"},
{ letter: "t", answer: "tTest2", status: 0, question: "CON LA T. Test2"},
{ letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
{ letter: "u", answer: "uTest1", status: 0, question: "CON LA U. Test1"},
{ letter: "u", answer: "uTest2", status: 0, question: "CON LA U. Test2"},
{ letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
{ letter: "v", answer: "vTest1", status: 0, question: "CON LA V. Test1"},
{ letter: "v", answer: "vTest2", status: 0, question: "CON LA V. Test2"},
{ letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
{ letter: "w", answer: "wTest1", status: 0, question: "CONTIENE LA W. Test1"},
{ letter: "w", answer: "wTest2", status: 0, question: "CONTIENE LA W. Test2"},
{ letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
{ letter: "x", answer: "xTest1", status: 0, question: "CONTIENE LA X. Test1"},
{ letter: "x", answer: "xTest2", status: 0, question: "CONTIENE LA X. Test2"},
{ letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
{ letter: "y", answer: "yTest1", status: 0, question: "CONTIENE LA Y. Test1"},
{ letter: "y", answer: "yTest2", status: 0, question: "CONTIENE LA Y. Test2"},
{ letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
{ letter: "z", answer: "zTest1", status: 0, question: "CON LA Z. Test1"},
{ letter: "z", answer: "zTest2", status: 0, question: "CON LA Z. Test2"}
]

let playerPoints = [
{player: 'Pepe', points: 23},
{player: 'Manolo', points: 26},
{player: 'Juan', points: 11},
{player: 'Andres', points: 13},
{player: 'Ramon', points: 17},
{player: 'Antonio', points: 4},
{player: 'Lucia', points: 7},
{player: 'Cristina', points: 9}
]

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let name = '';
let questionsSelected = []
let currentPlayer = '';
let contador = 0;
let timeCountdown = 150;
let downloadTimer;
let rankingHeader;
let lastQuestion;
var audio;
var audio2;

function load() {
    debugger
    rankingHeader = document.getElementById('TableRanking').innerHTML;
    audio = new Audio('winner.mp3');
    audio2 = new Audio('loser.mp3');
    var input = document.getElementById("answerBox");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
         event.preventDefault();
         document.getElementById("sendAnswer").click();
     }
 });
    var input2 = document.getElementById("PlayerName");
    input2.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
         event.preventDefault();
         document.getElementById("playButton").click();
     }
 });
}

window.onload = load;

function resetVars(){
    name = '';
    questionsSelected = [];
    currentPlayer = '';
    questions.forEach(question => {
        question.status = 0;
    })
    contador=0;
    timeCountdown = 150;
    document.getElementById("CountDown").textContent = timeCountdown;

    alphabet.forEach(letter => {
        document.getElementById("Circle"+letter.toUpperCase()).style.backgroundColor = "blue";
    })
    clearInterval(downloadTimer);
}

function play(){
    debugger
    saveName();
    if(name != ''){
        document.getElementById('Menu').style.display = "none";
        document.getElementById('Rosco').style.display = "block";
        refreshPlayerPoints();
        initializeCountdown();
        setQuestions();
        askhtml();
    }
}

function refreshPlayerPoints(){
    document.getElementById('CurrentPlayer').textContent = currentPlayer.points;
}

function initializeCountdown(){
    downloadTimer = setInterval(function(){
      if(timeCountdown <= 0){
        clearInterval(downloadTimer);
        document.getElementById('Questions').innerHTML = "¡¡¡Se acabo el tiempo!!!";
        document.getElementById("CountDown").textContent = "0";
        audio2.play();
        changeButtons();
    } else {
        document.getElementById("CountDown").textContent = timeCountdown;

    }
    timeCountdown -= 1;
}, 1000);
}

function askhtml(){
    let question = [];

    do{
        question = questionsSelected[contador];
        if(question.status == 0){
            lastQuestion = questionsSelected[contador];
            document.getElementById('Questions').textContent = question.question;
            document.getElementById("Circle"+question.letter.toUpperCase()).style.backgroundColor = "#7257AD";
        }
        if(contador === 26){
            contador = 0
        }else{
            contador++;
        }
    }while(question.status != 0 && !completed());
}

function sendAnswer(){
    let answer = document.getElementById('answerBox').value;
    if(answer != ''){
        valueAnswer(answer)
        askhtml();
        document.getElementById('answerBox').value = '';
    }
}

function valueAnswer(answer){
    let question = questionsSelected.filter(obj => obj.question == document.getElementById('Questions').textContent)[0];
    if (answer.toUpperCase() == question.answer.toUpperCase()){
        question.status = 2;
        currentPlayer.points++;
        refreshPlayerPoints();
        document.getElementById("Circle"+question.letter.toUpperCase()).style.backgroundColor = "green";
    }else{
        question.status = 1;
        document.getElementById("Circle"+question.letter.toUpperCase()).style.backgroundColor = "red";
    }
}

function pasapalabra(){
    document.getElementById('answerBox').value = '';
    document.getElementById("Circle"+lastQuestion.letter.toUpperCase()).style.backgroundColor = "blue";
    askhtml();
}

function end(){
    clearInterval(downloadTimer);
    changeButtons();
    document.getElementById('Questions').innerHTML = "¡¡¡Fin del juego!!!";
}

function completed(){
    let hits = questionsSelected.filter(obj => obj.status === 2).length;
    let failures = questionsSelected.filter(obj => obj.status === 1).length;
    let noAnswer = questionsSelected.filter(obj => obj.status === 0).length;
    if(hits == 27){
        document.getElementById('Questions').innerHTML = "¡¡¡Fin del juego!!! <br>¡Enhorabuena, has acertado todas las palabras!";
        savePlayer();
        clearInterval(downloadTimer)
        changeButtons();
        audio.play();
        return true;
    }else if((hits + failures) == 27){
        document.getElementById('Questions').innerHTML = "¡¡¡Fin del juego!!!";
        clearInterval(downloadTimer)
        changeButtons();
        savePlayer();
        audio2.play();
        return true;
    }else{
        return false;
    }
}

function setQuestions(){
    alphabet.forEach(letra => {
        let words = questions.filter(obj => obj.letter.toUpperCase() === letra.toUpperCase());
        questionsSelected.push(words[Math.floor(Math.random() * 3)]);
    });
}

function compare( a, b ) {
  if ( a.points > b.points ){
    return -1;
}
if ( a.points < b.points ){
    return 1;
}
return 0;
}

function saveName(){
    name = document.getElementById('PlayerName').value;
    searchAndSetPlayer();
}

function searchAndSetPlayer(){
    let playerFound = playerPoints.find(obj => obj.player === name);
    if (playerFound != undefined){
        playerPoints = playerPoints.filter(obj => obj.player !== name);
        currentPlayer = {player: name, points:0};
    } else {
        currentPlayer = {player: name, points:0};
    }
}

function savePlayer(){
    playerPoints.push({player: name, points: currentPlayer.points});
}

function showRanking(){
    document.getElementById('Menu').style.display = "none";
    document.getElementById('Rosco').style.display = "none";
    document.getElementById('Ranking').style.display = "block";
    let ranking = '';

    playerPoints.sort(compare);
    playerPoints.forEach(player => {
        ranking += "<tr><td>" + player.player + '</td><td>' + player.points + '</td></tr>';
    });
    document.getElementById('TableRanking').innerHTML = rankingHeader + ranking;
}

function changeButtons(){
    document.getElementById('buttonsGame').style.display = "none";
    document.getElementById('buttonEndTime').style.display = "block";
}

function back(){
    document.getElementById('Menu').style.display = "block";
    document.getElementById('Rosco').style.display = "none";
    document.getElementById('Ranking').style.display = "none";
    document.getElementById('buttonsGame').style.display = "block";
    document.getElementById('buttonEndTime').style.display = "none";

    document.getElementById('PlayerName').value = '';
    resetVars();
}