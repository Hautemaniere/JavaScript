function modification3() {

    var modif = document.getElementsByClassName("LesDIVClass");
    
    for (var i = 0; i < modif.length; i++) {
        modif[i].innerHTML = "Hello";
    }
}