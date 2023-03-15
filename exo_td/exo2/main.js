MaDiv = document.getElementById("button");
MaDiv.addEventListener("click", CalculePeri);

function CalculePeri(evenement){
    var long = window.prompt("Merci de saisir une longueur : ");

    var aire = long*Math.PI;
    var peri = 2*long*Math.PI ;
    alert("L'aire est : "+aire+" \nLe perimetre est de : " + peri);
}