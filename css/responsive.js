function myFunction() {
    var x = document.getElementById("mymenue");
    if (x.className === "menue") {
        x.className += " responsive";
    } else {
        x.className = "menue";
    }
}