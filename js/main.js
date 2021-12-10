const myAge = prompt("Vul je leeftijd in");
if (myAge < 16) {
    alert ("Je bent jonger dan 16 jaar");
}

else if (myAge == 16 || myAge < 18) {
    alert ("Je bent 16 of ouder, maar wel onder 18");
}

else if (myAge == 18){
    alert ("Je bent 18");
}

else {
    alert ("Je bent ouder dan 18");
}


