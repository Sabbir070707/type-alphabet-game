25-2

// op2
function makecolor(){
    document.body.style.backgroundColor = "green";
}

//op3
const makeColorButton = document.getElementById('idname');
makeColorButton.onclck = makecolorb; // dont use bracket

function makecolorb(){
    document.body.style.backgroundColor = "yellow"
}