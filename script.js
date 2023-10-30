var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var message = document.querySelector('.message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');
var compteur = 0;
var zero = 0;

//Nombre Aleatoires debut du jeu

random1 = Math.random()*11 << 0; //Pour generer des nombres entre 0 et 11
random2 = Math.random()*11 << 0; //Pour generer des nombres entre 0 et 11

//Inserer les nombres au hasord dans les variables nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;


// fonction de verification

 function verifier(){
    //recuperer le resultatentrer dans le jeu
    var res = document.querySelector('.res').value;
    var btn = document.querySelector('.btn');
     
    if(random1 + random2 == res){
        message.style.background = "green";
        message.innerHTML = "correcte !";

        //creer des autres Nombres Aleatoires

        random1 = Math.random()*11 << 0; //Pour generer des nombres entre 0 et 11
        random2 = Math.random()*11 << 0; //Pour generer des nombres entre 0 et 11

        //Inserer les nombres au hasord dans les variables nb1 et nb2
        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        res.innerHTML = zero;
        compteur = compteur + 1;

    }
     
    else{
        message.style.background = "red";
        //section.innerHTML = " ";
        message.innerHTML = "Vous avez perdu !"
        btn.style.display = "none"
    
        score.innerHTML = ` <span class="test">${compteur}</span?> </br> Score  `
        link.style.display = "block"
    }
 }