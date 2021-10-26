
//Generazione numero casuale
//Utente
let usernumber = Math.floor(Math.random()*6)+1;
console.log(usernumber);
document.getElementById("usernumber").innerHTML = "Il tuo numero è: " + (usernumber);
//Pc
let pcnumber = Math.floor(Math.random()*6)+1;
console.log(pcnumber);
document.getElementById("pcnumber").innerHTML = "Il tuo numero è: " + (pcnumber);

//Confronto
if(usernumber > pcnumber){
    document.getElementById('result').innerHTML = "Hai vinto!"
}else if(pcnumber > usernumber){
    document.getElementById('result').innerHTML = "Hai perso :("
}else{
    document.getElementById('result').innerHTML = "Siete in pareggio!"
}