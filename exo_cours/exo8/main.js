function modification() {
    var modif = document.getElementsByName("LesDIV");

    modif.forEach(function(element) {
        element.innerHTML = "Hello";
    });
    return "Hello";
}