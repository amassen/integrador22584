function calcPrecio() {
    let ticket=200
    let categ=document.getElementById("categ").value;
    let cant=document.getElementById("cant").value;
    let desc=0
    let precio=0
    
    switch (categ) {
        case "1":
            desc=0.8*ticket;
            break;
        case "2":
            desc=0.5*ticket;
            break;
        case "3":
            desc=0.15*ticket;
            break;
        default:
            break;
    }

    precio=(ticket-desc)*cant;

    document.getElementById("total").innerHTML=`Total a Pagar: $ ${precio}`;
}


function borrar() {
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("email").value="";
    document.getElementById("cant").value="";
    document.getElementById("categ").value="1";
    document.getElementById("total").innerHTML=`Total a Pagar: $`;
}
