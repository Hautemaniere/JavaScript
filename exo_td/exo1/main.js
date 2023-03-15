MaDiv = document.getElementById("button");
MaDiv.addEventListener("click", CalculePeri);

function CalculePeri(evenement){
    var long = window.prompt("Merci de saisir une longueur : ");
    var larg = window.prompt("Merci de saisir une largeur : ");
    var aire = long*larg;
    var peri = long*2 + larg*2;
    alert("L'aire est : "+aire+" \nLe perimetre est de : " + peri);
}