function mafunction() {
    fetch('../api/api2.php?key1="Taille : "&key2="30"', {
        method: 'GET'
    }).then((resp) => resp.json()).then(function (data) {
        console.log(data);
        arenne.innerHTML = data;
        alert(data);
    }
    ).catch(function (error) {
        console.log(error);
    })
}