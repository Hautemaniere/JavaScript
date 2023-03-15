maDiv = document.getElementById("toto")
maDiv.addEventListener("mouseover", Survole);
maDiv.addEventListener("mouseout", SurvolePas);
maDiv.addEventListener("click", Click);

function Survole(evenement){
    evenement.target.innerHTML = "survolé";
    evenement.target.className = "class";
}

function SurvolePas(evenement){
    evenement.target.innerHTML = "pas survolé";
    evenement.target.className = "class2";
}

function Click(evenement){
    evenement.target.innerHTML = "cliqué";
    evenement.target.className = "class3";
}