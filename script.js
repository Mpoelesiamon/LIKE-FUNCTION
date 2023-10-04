function increamentButton() {
    var element = document.getElementById("increamentText");

    var value = parseInt(element.innerHTML);

    
    ++ value;

    console.log(value);

    document.getElementById("increamentText").innerHTML = value;


}