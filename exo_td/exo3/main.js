a = 3;
b = 2;


MaDiv = document.getElementById("button");
MaDiv.addEventListener("click", multiplie);

function multiplie(x = 8){
return x*3;
}

function affiche(){
    alert(multiplie(a));
    alert(multiplie(b));
    alert(multiplie());
}