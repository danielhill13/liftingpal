    //Powerball Numbers
    
    
    function gimmeThatPB(){
        var lottoArray = [];
        var ballNum = getLuckyBallPB();
        for (i = 0; i < 5; i++){
            lottoArray.push(getNumber(lottoArray));
        }
        return "Your Powerball Numbers are " + lottoArray.sort(function(a, b){return a - b}) + " and your ball number is " + ballNum;
}
function getNumber(lottoArray){
    var A = Math.floor(Math.random() * 71);
    while (A > 69 || A < 1 || A == lottoArray[0]  || A == lottoArray[1] || A == lottoArray[2] || A == lottoArray[3] ){
         A = Math.floor(Math.random() * 71);
    }
    return A;
}
function getLuckyBallPB(){
    return Math.floor(Math.random()* 27)
}

//Mega Millions
function gimmeThatMM(){
    var lottoArray = [];
    var ballNum = getLuckyBallMM();
for (i = 0; i < 5; i++){
    lottoArray.push(getNumber(lottoArray));
}
return "Your MegaMillions Numbers are " + lottoArray.sort(function(a, b){return a - b}) + " and your ball number is " + ballNum;
}

function getNumber(lottoArray){
    var A = Math.floor(Math.random() * 71);
    while (A > 70 || A < 1 || A == lottoArray[0]  || A == lottoArray[1] || A == lottoArray[2] || A == lottoArray[3] ){
         A = Math.floor(Math.random() * 71);
    }
    return A;
}

function getLuckyBallMM(){
    return Math.floor(Math.random()* 26)
}

//PB html
function pbProvide(){
  if (document.getElementById("pbnum")){
    var oldNum = document.getElementById("pbnum");
    oldNum.remove();
  }
    var answer = document.createElement("p");
    answer.innerHTML = gimmeThatPB();
  answer.setAttribute("id", "pbnum")
    afterPB.appendChild(answer);
}

//MM HTML
function mmProvide(){
  if (document.getElementById("mmnum")){
    var oldNum = document.getElementById("mmnum");
    oldNum.remove();
  }
    var answer = document.createElement("p");
    answer.innerHTML = gimmeThatMM();
  answer.setAttribute("id", "mmnum")
    afterMM.appendChild(answer);
}